package org.theoliverlear.model.deprecated;
//=================================-Imports-==================================
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;

@Deprecated
public class ApiNameRequest {
    //=============================-Variables-================================
    AiModel model;
    private String gender;
    private String nationality;
    private ArrayList<String> similarNames;
    public ArrayList<String> excludedNames;
    private float uniqueness; // Make this a slider in the browser
    private String lastName;
    private boolean includeLastName;
    private ApiNameResponse apiNameResponse;
    private String prompt;
    private String apiKey;
    private String name;
    //============================-Constructors-==============================
    public ApiNameRequest() {
        this.model = new AiModel(AiModelType.GPT_TURBO);
        this.initializePrompt();
        this.initializeApiKey();
        this.sendRequest();
    }
    public ApiNameRequest(AiModel model, String gender, String nationality, ArrayList<String> similarNames, ArrayList<String> excludedNames, float uniqueness, String lastName, boolean includeLastName) {
        this.model = model;
        this.nationality = nationality;
        this.gender = gender;
        this.similarNames = similarNames;
        this.excludedNames = excludedNames;
        this.uniqueness = uniqueness;
        this.lastName = lastName;
        this.includeLastName = includeLastName;
        this.initializePrompt();
        this.initializeApiKey();
        this.sendRequest();
    }
    //=============================-Methods-==================================

    private void initializePrompt() {
        String nationality = this.nationality;
        String gender = this.gender;
        String similarNames = this.similarNames.toString();
        String excludedNames = this.excludedNames.toString();
        float uniqueness = this.uniqueness;
        String lastName = this.lastName;
        String includeLastName = String.valueOf(this.includeLastName);
        String prompt = "You will generate a single baby name based on the following factors. " +
                        "Gender: %s - " +
                        "Nationality: %s - " +
                        "Similar Names: %s - " +
                        "Excluded Names: %s - " +
                        "Uniqueness: %1.1f/1.0 (0.0 is least unique, 1.0 is completely unique) - " +
                        "Last Name: %s - " +
                        "Include Last Name In Response: %s - " +
                        "You will respond only with a single name.";
        prompt = prompt.formatted(gender, nationality, similarNames, excludedNames, uniqueness, lastName, includeLastName);
        this.prompt = prompt;
        System.out.println(this.prompt);
    }

    private void sendRequest() {
        String model = this.model.getModelType().MODEL_TYPE;
        String prompt = this.prompt;
        int maxTokens = this.model.getModelType().MAX_TOKENS;
        float temperature = this.model.getModelType().TEMPERATURE;
        String url = this.model.getModelType().URL_PATH;
        String requestBody = """
                {
                    "model": "%s",
                    "prompt": "%s",
                    "max_tokens": %d,
                    "temperature": %f
                }""".formatted(model, prompt, maxTokens, temperature);
        // Send request to OpenAI
        HttpClient httpClient = HttpClient.newHttpClient();
        System.out.println("API KEY IS: " + this.apiKey);
        HttpRequest httpRequest = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .setHeader("Content-Type", "application/json")
                .setHeader("Authorization", "Bearer " + this.apiKey)
                .setHeader("Cache-Control", "no-cache")
                .setHeader("X-Content-Type-Options", "nosniff")
                .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                .build();
        HttpResponse<String> httpResponse = null;
        try {
            httpResponse = httpClient.send(httpRequest, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException ex) {
            this.apiNameResponse = new ApiNameResponse("Error");
            ex.printStackTrace();
        }
        if (httpResponse != null) {
            this.apiNameResponse = new ApiNameResponse(httpResponse.body());
        } else {
            this.apiNameResponse = new ApiNameResponse("Error");
        }
        Name name = new Name(this.apiNameResponse);
        this.name = name.getName();
    }
    public void initializeApiKey() {
        String environmentKey = System.getenv("OPENAI_KEY");
    }

    //=============================-Getters-==================================
    public String getNationality() {
        return this.nationality;
    }
    public String getGender() {
        return this.gender;
    }
    public ArrayList<String> getSimilarNames() {
        return this.similarNames;
    }
    public ApiNameResponse getApiNameResponse() {
        return this.apiNameResponse;
    }
    //=============================-Setters-==================================
    public void setNationality(String nationality) {
        this.nationality = nationality;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public void setSimilarNames(ArrayList<String> similarNames) {
        this.similarNames = similarNames;
    }
    public void setApiNameResponse(ApiNameResponse apiNameResponse) {
        this.apiNameResponse = apiNameResponse;
    }
}

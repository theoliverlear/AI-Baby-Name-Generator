package org.theoliverlear.model.message;
//=================================-Imports-==================================
import lombok.Getter;
import lombok.Setter;
import org.theoliverlear.model.ai.AiModel;
import org.theoliverlear.model.name.NamesParameters;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Getter
@Setter
public class ApiCall {
    //============================-Variables-=================================
    NamesParameters namesParameters;
    AiModel aiModel;
    ApiSettings apiSettings;
    NameResponse response;
    //===========================-Constructors-===============================
    public ApiCall() {
        this.namesParameters = new NamesParameters();
        this.aiModel = AiModel.GPT_4;
        this.apiSettings = ApiSettings.DEFAULT;
        this.namesParameters = new NamesParameters();
        this.response = new NameResponse();
    }
    public ApiCall(AiModel aiModel, ApiSettings apiSettings, NamesParameters namesParameters) {
        this.aiModel = aiModel;
        this.apiSettings = apiSettings;
        this.namesParameters = namesParameters;
        this.response = new NameResponse();
    }
    //=============================-Methods-==================================

    //------------------------Fetch-Name-Response-----------------------------
    public void fetchNameResponse() {
        HttpClient httpClient = HttpClient.newHttpClient();
        try {
            HttpRequest httpRequest = HttpRequest.newBuilder()
                    .uri(URI.create(this.aiModel.getUrlPath()))
                    .header("Content-Type", "application/json")
                    .header("Authorization", "Bearer " + this.apiSettings.getApiKey())
                    .header("Cache-Control", "no-cache")
                    .header("X-Content-Type-Options", "nosniff")
                    .POST(HttpRequest.BodyPublishers.ofString(this.getRequestBody()))
                    .build();
            HttpResponse<String> httpResponse = httpClient.send(httpRequest, HttpResponse.BodyHandlers.ofString());
            if (httpResponse != null) {
                this.response = new NameResponse(httpResponse.body());
            } else {
                this.response = new NameResponse("Error");
                throw new RuntimeException("Failed to fetch name response");
            }
        } catch (IOException | InterruptedException ex) {
            throw new RuntimeException("Failed to fetch name response", ex);
        }
    }
    //--------------------------Get-Request-Body------------------------------
    public String getRequestBody() {
        return """
                {
                    "model": "%s",
                    "messages": [
                        {
                            "role": "user",
                            "content": "%s"
                        }
                    ],
                    "max_tokens": %d,
                    "temperature": %f
                }""".formatted(this.aiModel.getModelType(),
                this.namesParameters.getRequestPrompt(),
                this.apiSettings.getMaxTokens(),
                this.apiSettings.getTemperature());
    }
}

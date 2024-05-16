package org.theoliverlear.model.message;

import lombok.Getter;
import lombok.Setter;
import org.theoliverlear.model.ai.AiModel;
import org.theoliverlear.model.name.NameRequestParameters;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Getter
@Setter
public class ApiCall {
    NameRequestParameters nameRequestParameters;
    AiModel aiModel;
    ApiSettings apiSettings;
    NameResponse response;

    public ApiCall() {
        this.nameRequestParameters = new NameRequestParameters();
        this.aiModel = AiModel.GPT_4;
        this.apiSettings = ApiSettings.DEFAULT;
        this.nameRequestParameters = new NameRequestParameters();
        this.response = new NameResponse();
    }
    public ApiCall(AiModel aiModel, ApiSettings apiSettings, NameRequestParameters nameRequestParameters) {
        this.aiModel = aiModel;
        this.apiSettings = apiSettings;
        this.nameRequestParameters = nameRequestParameters;
        this.response = new NameResponse();
    }
    public void fetchNameResponse() {
        try (HttpClient httpClient = HttpClient.newHttpClient()) {
            HttpRequest httpRequest = HttpRequest.newBuilder()
                    .uri(URI.create(this.aiModel.getUrlPath()))
                    .header("Content-Type", "application/json")
                    .header("Authorization", "Bearer " + this.apiSettings.getApiKey())
                    .header("Cache-Control", "no-cache")
                    .header("X-Content-Type-Options", "nosniff")
                    .POST(HttpRequest.BodyPublishers.ofString(this.nameRequestParameters.getRequestString()))
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
}

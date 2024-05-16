package org.theoliverlear.model.message;

import lombok.Getter;
import lombok.Setter;
import org.theoliverlear.model.ai.AiModel;

@Getter
@Setter
public class ApiSettings {
    public static final ApiSettings DEFAULT = new ApiSettings(AiModel.GPT_4, 100, 0.7f);
    private AiModel aiModel;
    private int maxTokens;
    private float temperature;
    private String apiKey;
    public ApiSettings(AiModel aiModel, int maxTokens, float temperature) {
        this.aiModel = aiModel;
        this.maxTokens = maxTokens;
        this.temperature = temperature;
        this.apiKey = System.getenv("OPENAI_KEY");
    }
}

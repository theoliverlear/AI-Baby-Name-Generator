package org.theoliverlear.model.ai;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AiModel {
    public static final AiModel GPT_4 = new AiModel("gpt-4", "https://api.openai.com/v1/completions");
    public static final AiModel GPT_TURBO = new AiModel("gpt-3.5-turbo-instruct", "https://api.openai.com/v1/completions");
    String modelType;
    String urlPath;
    AiModel(String modelType, String urlPath) {
        this.modelType = modelType;
        this.urlPath = urlPath;
    }
}

package org.theoliverlear.model.deprecated;

@Deprecated
public enum AiModelType {
    GPT_TURBO("gpt-3.5-turbo-instruct", "https://api.openai.com/v1/completions", 100, 0.9f),
    GPT_4("gpt-4", "https://api.openai.com/v1/completions", 100, 0.9f);
    public final String MODEL_TYPE;
    public final String URL_PATH;
    public final int MAX_TOKENS;
    public final float TEMPERATURE;
    AiModelType(String MODEL_TYPE, String URL_PATH, int MAX_TOKENS, float TEMPERATURE) {
        this.MODEL_TYPE = MODEL_TYPE;
        this.URL_PATH = URL_PATH;
        this.MAX_TOKENS = MAX_TOKENS;
        this.TEMPERATURE = TEMPERATURE;
    }
}

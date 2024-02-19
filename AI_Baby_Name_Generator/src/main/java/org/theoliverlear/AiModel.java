package org.theoliverlear;

public class AiModel {
    AiModelType modelType;
    public AiModel(AiModelType modelType) {
        this.modelType = modelType;
    }
    public AiModelType getModelType() {
        return this.modelType;
    }
    public void setModelType(AiModelType modelType) {
        this.modelType = modelType;
    }
}

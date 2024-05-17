package org.theoliverlear.model.generator;
//=================================-Imports-==================================
import lombok.Getter;
import lombok.Setter;
import org.theoliverlear.entity.name.Names;
import org.theoliverlear.model.ai.AiModel;
import org.theoliverlear.model.message.ApiCall;
import org.theoliverlear.model.message.ApiSettings;
import org.theoliverlear.model.message.NameResponse;
import org.theoliverlear.model.name.NamesParameters;

@Getter
@Setter
public class NameGenerator {
    //============================-Variables-=================================
    private NamesParameters namesParameters;
    private AiModel aiModel;
    private ApiSettings apiSettings;
    private Names generatedNames;
    //===========================-Constructors-===============================
    public NameGenerator() {
        this.namesParameters = new NamesParameters();
        this.aiModel = AiModel.GPT_4;
        this.apiSettings = ApiSettings.DEFAULT;
        this.generatedNames = new Names();
    }
    public NameGenerator(NamesParameters namesParameters) {
        this.namesParameters = namesParameters;
        this.aiModel = AiModel.GPT_4;
        this.apiSettings = ApiSettings.DEFAULT;
        this.generatedNames = new Names();
    }
    public NameGenerator(NamesParameters namesParameters, AiModel aiModel, ApiSettings apiSettings) {
        this.namesParameters = namesParameters;
        this.aiModel = aiModel;
        this.apiSettings = apiSettings;
        this.generatedNames = new Names();
    }
    //=============================-Methods-==================================

    //---------------------------Generate-Names-------------------------------
    public void generateNames() {
        ApiCall apiCall = new ApiCall(this.aiModel, this.apiSettings, this.namesParameters);
        apiCall.fetchNameResponse();
        NameResponse nameResponse = apiCall.getResponse();
        this.generatedNames = nameResponse.getNames();
    }
    //-----------------------Generate-And-Get-Names---------------------------
    public Names generateAndGetNames() {
        this.generateNames();
        return this.generatedNames;
    }
}

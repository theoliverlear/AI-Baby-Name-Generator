package org.theoliverlear.model.generator;

import lombok.Getter;
import lombok.Setter;
import org.theoliverlear.entity.name.Name;
import org.theoliverlear.model.ai.AiModel;
import org.theoliverlear.model.message.ApiCall;
import org.theoliverlear.model.message.ApiSettings;

@Getter
@Setter
public class NameGenerator {
    private AiModel aiModel;
    private ApiSettings apiSettings;
    private Name generatedName;
    private ApiCall apiCall;

    public void generateName() {
        // Create an Api call
        // Send it
        // Save the response
        // Turn response into names
        // Save to generatedName
    }
}

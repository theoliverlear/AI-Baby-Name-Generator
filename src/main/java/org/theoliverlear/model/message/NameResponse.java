package org.theoliverlear.model.message;
//=================================-Imports-==================================
import lombok.Getter;
import lombok.Setter;
import org.theoliverlear.entity.name.Name;
import org.theoliverlear.entity.name.Names;
import org.theoliverlear.model.name.NameListSeperator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Getter
@Setter
public class NameResponse {
    //============================-Variables-=================================
    private String response;
    //===========================-Constructors-===============================
    public NameResponse() {
        this.response = "";
    }
    public NameResponse(String response) {
        this.response = response;
    }
    //=============================-Methods-==================================

    //-----------------------------Get-Names----------------------------------
    public Names getNames() {
        Names responseName = new Names();
        Pattern namePatternRegex = Pattern.compile("(content\": \")(.[^\"]*)");
        Matcher nameMatcher = namePatternRegex.matcher(this.response);
        if (nameMatcher.find()) {
            String namesString = nameMatcher.group(2);
            responseName = NameListSeperator.seperateNames(namesString);
        } else {
            responseName.addName(new Name("Error"));
        }
        return responseName;
    }
}

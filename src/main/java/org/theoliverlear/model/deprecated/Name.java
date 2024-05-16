package org.theoliverlear.model.deprecated;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Deprecated
public class Name {
    //=============================-Variables-================================
    String name;
    String pronunciation;
    //============================-Constructors-==============================
    public Name(String name) {
        this.name = name;
    }
    public Name(ApiNameResponse apiNameResponse) {
        this.name = apiNameResponse.getResponse();
        this.parseName();
    }
    //=============================-Methods-==================================

    public void parseName() {
        Pattern namePatternRegex = Pattern.compile("(\\\\n\\\\n)(.[^\"]*)");
        Matcher nameMatcher = namePatternRegex.matcher(this.name);
        if (nameMatcher.find()) {
            this.name = nameMatcher.group(2);
        } else {
            this.name = "Error";
        }
    }
    @Override
    public String toString() {
        return this.name + " - " + this.pronunciation;
    }
    //=============================-Getters-==================================
    public String getName() {
        return this.name;
    }
    //=============================-Setters-==================================
    public void setName(String name) {
        this.name = name;
    }
}

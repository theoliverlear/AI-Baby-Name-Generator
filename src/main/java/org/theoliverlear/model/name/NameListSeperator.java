package org.theoliverlear.model.name;

import org.theoliverlear.entity.name.Name;
import org.theoliverlear.entity.name.Names;

public class NameListSeperator {
    public static Names seperateNames(String namesString) {
        Names names = new Names();
        String delimiter = ",";
        if (namesString.contains(" ")) {
            delimiter = " ";
        }
        String[] namesArray = namesString.split(delimiter);
        for (String name : namesArray) {
            names.addName(new Name(name));
        }
        return names;
    }
}

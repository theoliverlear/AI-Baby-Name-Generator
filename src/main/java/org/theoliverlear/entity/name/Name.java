package org.theoliverlear.entity.name;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Name {
    String name;
    public Name() {
        this.name = "";
    }
    public Name(String name) {
        this.name = name;
    }
}

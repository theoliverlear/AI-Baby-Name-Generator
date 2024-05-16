package org.theoliverlear.entity.name;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class Names {
    List<Name> names;
    public Names() {
        this.names = new ArrayList<>();
    }
    public Names(List<Name> names) {
        this.names = names;
    }
    public void addName(Name name) {
        this.names.add(name);
    }
}

package org.theoliverlear.model.message;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NameResponse {
    private String response;
    public NameResponse() {
        this.response = "";
    }
    public NameResponse(String response) {
        this.response = response;
    }
}

package org.theoliverlear.model.deprecated;

@Deprecated
public class ApiNameResponse {
    String response;
    //============================-Constructors-==============================
    public ApiNameResponse(String response) {
        this.response = response;
    }
    //=============================-Getters-==================================
    public String getResponse() {
        return this.response;
    }
    //=============================-Setters-==================================
    public void setResponse(String response) {
        this.response = response;
    }
}

package org.theoliverlear.model.name;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class NameRequestParameters {
    private List<String> similarNames;
    private List<String> dissimilarNames;
    private int numNames;
    private int complexityScale;
    private int uniquenessScale;
    private String requestString;
    public NameRequestParameters() {
        this.similarNames = new ArrayList<>();
        this.dissimilarNames = new ArrayList<>();
        this.numNames = 1;
        this.complexityScale = 1;
        this.uniquenessScale = 1;
        this.requestString = "";
    }
    public NameRequestParameters(List<String> similarNames, List<String> dissimilarNames, int numNames, int complexityScale, int uniquenessScale) {
        this.similarNames = similarNames;
        this.dissimilarNames = dissimilarNames;
        this.numNames = numNames;
        this.complexityScale = complexityScale;
        this.uniquenessScale = uniquenessScale;
        this.requestString = requestString;
        this.fetchRequestString();
    }
    /** For Oliver:
     * @see org.theoliverlear.model.deprecated.ApiNameRequest
     */
    public void fetchRequestString() {

    }
}

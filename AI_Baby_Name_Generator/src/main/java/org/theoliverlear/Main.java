package org.theoliverlear;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static ArrayList<String> getNameList(String prompt) {
        Scanner userInput = new Scanner(System.in);
        ArrayList<String> nameList = new ArrayList<>();
        boolean continueAddingNames = true;
        while (continueAddingNames) {
            System.out.println(prompt);
            String name = userInput.nextLine();
            nameList.add(name);
            System.out.println("Would you like to add another name? (y/n)");
            String response = userInput.nextLine();
            if (response.equals("n")) {
                continueAddingNames = false;
            }
        }
        return nameList;
    }
    public static String getUserInput(String prompt) {
        Scanner userInput = new Scanner(System.in);
        System.out.println(prompt);
        String response = userInput.nextLine();
        return response;
    }
    public static void buildName() {
        String gender = getUserInput("Enter the gender:");
        String nationality = getUserInput("Enter the nationality:");
        ArrayList<String> similarNames = getNameList("Enter similar names:");
        ArrayList<String> excludedNames = getNameList("Enter excluded names:");
        float uniqueness = Float.parseFloat(getUserInput("Enter the uniqueness out of 1.0:"));
        String lastName = getUserInput("Enter the last name:");
        boolean includeLastName = Boolean.parseBoolean(getUserInput("Include the last name? (true/false)"));
        ApiNameRequest apiNameRequest = new ApiNameRequest(new AiModel(AiModelType.GPT_TURBO),
                                                           gender,
                                                           nationality,
                                                           similarNames,
                                                           excludedNames,
                                                           uniqueness,
                                                           lastName,
                                                           includeLastName);
        Name name = new Name(apiNameRequest.getApiNameResponse());
        System.out.println(name.getName());
    }
    public static void main(String[] args) {
        buildName();
        // TODO: Make it so you can generate both middle names and first name
        //       and you can lock one or the other and continue generating
        //       using that context.
    }
}

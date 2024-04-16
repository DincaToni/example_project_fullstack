package com.toni_dinca.example_project.api.controller;

import com.toni_dinca.example_project.api.model.TextBundle;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {
    @PostMapping("/AnalyzeText")
    @ResponseBody
    String analyze(@RequestBody TextBundle ob)
    {
        String input = ob.getText().toLowerCase();
        HashMap<Character, Integer> vowels = new HashMap<>();
        HashMap<Character, Integer> consonants = new HashMap<>();

        for (char ch : input.toCharArray()) {
            if (Character.isLetter(ch)) {
                if ("aeiou".contains(String.valueOf(ch))) {
                    vowels.put(ch, vowels.getOrDefault(ch, 0) + 1);
                } else {
                    consonants.put(ch, consonants.getOrDefault(ch, 0) + 1);
                }
            }
        }
        String response = "{\"data\": \"";
        if (ob.getAnalysisType().equals("vowels")) {
            response = response + showCharacterCounts(vowels, "Vowel") + "\"}";
            return response;
        } else if (ob.getAnalysisType().equals("consonants")) {
            response = response + showCharacterCounts(consonants, "Consonant") + "\"}";
            return response;
        } else {
            return "Invalid mode. Use 'vowels' or 'consonants'.";
        }
    }

    private static String showCharacterCounts(HashMap<Character, Integer> map, String label) {
        String result = "";
        for (char ch : map.keySet()) {
            result = result + (label + " '" + ch + "' appears " + map.get(ch) + " times\\n");
        }
        return result;
    }

}

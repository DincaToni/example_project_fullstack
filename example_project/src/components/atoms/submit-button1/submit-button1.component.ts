import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'submit-button1',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './submit-button1.component.html',
  styleUrl: './submit-button1.component.css',
})
export class SubmitButton1Component {
  @Input() taValue!: String;

  @Input() checkedVal!: String;

  @Input() isSwitchOn!: boolean;

  @Input() results!: String[];
  @Output() resultsChange = new EventEmitter<String[]>();

  countVowels(input: String): String {
    const vowels = 'aeiouAEIOU';
    const vowelCounts = new Map();

    for (const char of input) {
      if (vowels.includes(char)) {
        const lowercaseChar = char.toLowerCase();
        vowelCounts.set(
          lowercaseChar,
          (vowelCounts.get(lowercaseChar) || 0) + 1
        );
      }
    }

    let finalResult: String = 'Vowel counts:\n';
    vowelCounts.forEach((count, char) => {
      finalResult = finalResult + `Letter '${char}' appears ${count} times\n`;
    });

    return finalResult;
  }

  countConsonants(input: String): String {
    const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    const consonantCounts = new Map();

    for (const char of input) {
      if (consonants.includes(char)) {
        const uppercaseChar = char.toUpperCase();
        consonantCounts.set(
          uppercaseChar,
          (consonantCounts.get(uppercaseChar) || 0) + 1
        );
      }
    }

    let finalResult: String = 'Consonant counts:\n';
    consonantCounts.forEach((count, char) => {
      finalResult = finalResult + `Letter '${char}' appears ${count} times\n`;
    });

    return finalResult;
  }

  analyzeText(args: String[]): String {
    const [mode, input] = args.slice(0, 2);
    console.log('args: ' + args);
    console.log('input: ' + input);
    if (mode === 'vowels') {
      return this.countVowels(input);
    } else if (mode === 'consonants') {
      return this.countConsonants(input);
    } else {
      console.error(
        'Invalid mode. Usage: node textAnalyzer.js <mode> <inputText>'
      );
      return '';
    }
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  postData() {
    let requestBody = {
      text: this.taValue,
      analysisType: this.checkedVal,
    };

    const url = 'http://localhost:8080/AnalyzeText';
    console.log(this.httpOptions);
    return this.http.post(url, requestBody, this.httpOptions) /*.pipe(
      map((response: any) => {
        console.log('Response:', response);
        return response;
      }),
      catchError((error) => {
        console.error('Error:', error);
        throw error;
      })
    )*/;
  }

  onSubmit = () => {
    if (!this.isSwitchOn) {
      this.results.push(this.analyzeText([this.checkedVal, this.taValue]));
    } else {
      this.postData().subscribe((response: any) => {
        this.results.push(response.data);
      });
    }
    this.resultsChange.emit(this.results);
    console.log(this.results);
  };
}

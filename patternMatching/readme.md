# Pattern Matcing

 bool match(string pattern, string message)

## Patterns

- Available characters are : **[a-zA-Z0-9]**
- Joker **"?"** means any character once
- Joker **"*"** means any character any times

## Examples

| Pattern | Message      | Result |
|---------|--------------|--------|
| abc     | abc          | true   |
| abc     | abb          | false  |
| abc     | abcd         | false  |
| ab?d    | abtd         | true   |
| ab?d    | abd          | false  |
| ab*d    | abcdcdcd     | true   |
| ab*d    | abcdcdc      | false  |
| ab*dc*d | abcdcdcd     | true   |
| ab*dc   | abdcdcdcdcdc | true   |
| *d      | abababababd  | true   |

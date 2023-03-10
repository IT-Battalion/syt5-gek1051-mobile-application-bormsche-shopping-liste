| ID  | Story                                                                                                                                                                                                     | Head | Priority | Complexity | Status |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------|----------|------------|--------|
| 1   | Als User möchte ich die Informationen  Produktname, Anzahl und Gekauft-Status aufgelistet sehen, damit ich weiß was ich einkaufen muss.                                                              | HOCJ | MH       | 30 Minuten | TODO   |
| 2   | Als User kann ich den Status eines Eintrags auf gekauft setzen damit ich weiß was ich alles schon eingekauft habe.                                                                                    | ELIP | MH       | 20 Minuten | TODO   |
| 3   | Als User kann ich mir zu einem Produkt alle Produktinformationen in der Detailansicht ansehen, damit ich weiß was ich einkaufe.                                                                       | DAMP | MH       | 40 Minuten | TODO   |
| 4   | Als User kann ich einen neuen Eintrag mit den Informationen Produktname, Anzahl, Notizen (optional) und Gekauft-Status erstellen, damit ich neue Dinge auf meine Einkaufsliste setzen kann.           | HOCJ | MH       | 50 Minuten | TODO   |
| 5   | Als User kann ich einen Eintrag über die Detailansicht löschen, damit ich die Items die ich nicht mehr kaufe meine Ansicht versperren.                                                                | ELIP | MH       | 20 Minuten | TODO   |
| 6   | Als User kann ich einen Eintrag über die Detailansicht bearbeiten, damit ich Änderungen an den Produkten vornehmen kann.                                                                              | DAMP | MH       | 30 Minuten | TODO   |
| 7   | Als User sollte es möglich sein sich anzumelden, damit nicht jeder meine Einkaufsliste bearbeiten kann.                                                                                               | ELIP | SH       | 80 Minuten | TODO   |
| 8   | Als User sollte es möglich sein zu filtern ob bereits gekaufte items angezeigt werden sollen, oder nicht, damit ich schneller die Dinge finde, die ich noch kaufen muss.                              | HOCJ | SH       | 30 Minuten | TODO   |
| 9   | Als User wäre es gut für die Einträge Bilder zur Verfügung zu haben, damit ich weiß wie das Produkt aussieht, dass ich suche.                                                                         | DAMP | NTH      | 60 Minuten | TODO   |
| 10  | Als User wäre es gut die Möglichkeit zu haben den Text als Markdown zu formatieren und formatiert anzeigen zu lassen, damit mir mehr Möglichkeiten zum formattieren meiner Notiz zur Verfügung steht. | ELIP | NTH      | 40 Minuten | TODO   |
| 11  | Als User möchte ich dass meine Artikel und deren Zustand sobald ich online bin mit allen anderen Usern synchronisiert werden, damit ich weiß falls eine Änderung an der Liste durchgeführt wurde.     | DAMP | MH       | 80 Minuten | TODO   |
| 12  | Als User will ich die Einträge in meiner Einkaufsliste auch sehen, wenn ich keine Internetverbindung habe.                                                                                            | HOCJ | MH       | 40 Minuten | TODO   |

## Stories

### Informationen aufgelistet

**ID**

1

**Description**

Als User möchte ich die Informationen Produktname, Anzahl und 
Gekauft-Status aufgelistet sehen, damit ich weiß was ich einkaufen muss.

**Acceptance Criteria**

- Alle Einträge sind für den Benutzer aufgelistet einsehbar.

**Assignee**

Jonas Hochsteger

**Estimate**

3

**Priority**

Must-Have

## Gekauft setzen

**ID**

2

**Description**

Als User kann ich den Status eines Eintrags auf gekauft setzen damit ich weiß was ich alles schon eingekauft habe.

**Acceptance Criteria**

- Ein Produkt soll durch einmaliges klicken auf einen Runden Kreis als "gekauft" makiert werden.  

- Gekaufte Produkte sollen dann anders dargestellt werden (durchgestrichen & abgedunkelt)

**Assignee**

Patrick Elias

**Estimate**

2

**Priority**

Must-Have

### Detailansicht ansehen

**ID**

3

**Description**

Als User kann ich mir zu einem Produkt alle 
Produktinformationen in der Detailansicht ansehen, damit ich weiß was 
ich einkaufe.

**Acceptance Criteria**

Produktinformationen umfassen: Produktname, Anzahl, Notiz (falls vorhanden) und Gekauft-Status

**Assignee**

Philip Damianik

**Estimate**

4

**Priority**

Must-Have

### Neuen Eintrag erstellen

**ID**

4

**Description**

Als User kann ich einen neuen Eintrag mit den Informationen 
Produktname, Anzahl, Notizen (optional) erstellen, 
damit ich neue Dinge auf meine Einkaufsliste setzen kann.

**Acceptance Criteria**

- Alle oben genannten Prameter können gesetzt werden  

- Alle oben genannten Parameter werden validiert. (im Epic beschrieben)

- Beim klicken auf "erstellen" wird der Eintrag erstellt und ist sofort sichtbar.

**Assignee**

Jonas Hochsteger

**Estimate**

5

**Priority**

Must-Have

### Eintrag löschen

**ID**

5

**Description**

Als User kann ich einen Eintrag über die Detailansicht von der Ansicht entfernen,
 damit die Items die ich nicht mehr kaufe meine Ansicht nicht versperren.

**Acceptance Criteria**

- Einträge werden nicht mehr angezeigt.
- Aus Konsistenz gründen bleibt der Eintrag trotzdem in der Datenbank vorhanden

**Assignee**

Patrick Elias

**Estimate**

2

**Priority**

Must-Have

### Eintrag bearbeiten

**ID**

6

**Description**

Als User kann ich einen Eintrag über die Detailansicht bearbeiten, damit ich Änderungen an den Produkten vornehmen kann.

**Acceptance Criteria**

- Sämtliche Produktdaten, welche beim Erstellen benötigt werden, können bearbeitet werden.
- Alle Eingaben werden erneut validiert.
- Die Änderungen sind nach einem klick auf "speichern" sofort sichtbar.

**Assignee**

Philip Damianik

**Estimate**

3

**Priority**

Must-Have

### Authentication

**ID**

7

**Description**

Als User sollte es möglich sein sich anzumelden, damit nicht jeder meine Einkaufsliste bearbeiten kann.

**Acceptance Criteria**

- Der Benutzer gibt einen Token an um sich zu authentifizieren.  

- Tokens müssen manuell generiert werden.

**Assignee**

Patrick Elias

**Estimate**

8

**Priority**

Should-Have

### Gekauft status filtern

**ID**

8

**Description**

Als User sollte es möglich sein zu filtern ob bereits gekaufte 
items angezeigt werden sollen, oder nicht, damit ich schneller die Dinge
 finde, die ich noch kaufen muss.

**Acceptance Criteria**

Nicht gekaufte und gekaufte Produkte werden je nach Einstellung des Filters oben oder unten angezeigt.

**Assignee**

Jonas Hochsteger

**Estimate**

3

**Priority**

Should-Have

### Produktbilder

**ID**

9

**Description**

Als User wäre es gut für die Einträge Bilder zur Verfügung zu 
haben, damit ich weiß wie das Produkt aussieht, dass ich suche.

**Acceptance Criteria**

- Beim Erstellen von einem Produkt kann genau ein Bild mit hochgeladen werden.
- Das Bild ist in der Detailansicht sichtbar.

**Assignee**

Philip Damianik

**Estimate**

6

**Priority**

Nice-To-Have

### Notizen in Markdown

**ID**

10

**Description**

Als User wäre es gut die Möglichkeit zu haben den Text als 
Markdown zu formatieren und formatiert anzeigen zu lassen, damit mir 
mehr Möglichkeiten zum formattieren meiner Notiz zur Verfügung steht.

**Acceptance Criteria**

- Notizen werden in Markdown angezeigt.

**Assignee**

Patrick Elias

**Estimate**

4

**Priority**

Nice-ToHave

### Synchronisation

**ID**

11

**Description**

Als User möchte ich dass meine Artikel und deren Zustand sobald
 ich online bin mit allen anderen Usern synchronisiert werden, damit ich 
weiß falls eine Änderung an der Liste durchgeführt wurde.

**Acceptance Criteria**

Änderungen der Daten sollen, sofern online mit den anderen Usern synchonisiert werden

**Assignee**

Philip Damianik

**Estimate**

8

**Priority**

Must-Have

### Offline Verfügbarkeit

**ID**

12

**Description**

Als User will ich die Enträge in meiner Einkaufsliste auch sehen, wenn ich keine Internetverbindung habe.

**Acceptance Criteria**

Offline verfügbarkeit des letzten Online-Stands der Daten ist gegeben

**Assignee**

Jonas Hochsteger

**Estimate**

4

**Priority**

Should-Have

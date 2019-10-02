const successCodes = {
    '0010': [{
        name: "Entgegengenommen",
        relation: "Nachricht, Auftragsliste, Auftrag",
        notes: "Umfang der Prüfung ist kreditinstitutsspezifisch.Mindestanforderung: physisch korrekt empfangen;Status ist nicht rechtsverbindlich.",
        example: "Nachricht entgegen-genommenAuftrag entgegenge-nommenAuftrag zur Ausführung weitergeleitet"
    }, {
        name: 'Auftrag entgegengenommen',
        relation: "Segment"
    }],
    '0020': [{
        name: 'TAN-Liste Nr. %1 aktiviert',
        relation: "Auftrag",
        params: "TAN-Listennummer"
    }, {
        name: "PIN-Sperre erfolgreich",
        relation: "Auftrag"
    }, {
        name: 'Ausgeführt',
        relation: "Auftrag",
        notes: "Abschluss der Verarbeitung",
        example: 'Auftrag ausgeführt'
    }, , {
        name: "PIN-Sperre aufgehoben",
        relation: "Auftrag"
    }, {
        name: 'PIN geändert',
        relation: "Auftrag",
        params: "TAN-Listennummer"
    }, {
        name: 'TAN-Liste gesperrt',
        relation: "Auftrag"
    }],
    '0030': [{
        name: "Auftrag empfangen-Sicherheitsfreigabe erforderlich",
        relation: "Auftrag"
    }, {
        name: "Auftrag empfangen-Sicherheitsfreigabe erforderlich und Auftragsstorno möglich",
        relation: "Auftrag"
    }],
    '0031': [{
        name: "Auftragsstorno durchgeführt",
        relation: "Auftrag"
    }],
    '0040': [{
        name: "Letzter Dialog endete am %1 um %2",
        relation: "Dialog",
        params: "Datum, Uhrzeit",
        example: "Letzter Dialog endete am 06.10.2017 um 11:21"
    }],
    '0041': [{
        name: "Auftragsstorno durchge-führt",
        relation: "Auftrag",
        params: "Email, Telefon",
        example: "Falls Datum/Uhrzeit nicht korrekt, wenden Sie sich bitte an Ihren Berater unter:030/123456-4444"
    }],
    '0090': [{
        name: "TAN OK (%1)",
        relation: "Element", params: "TAN"
    }],
    '0100': [{
        name: "Beendet",
        relation: "Dialog",
        notes: "Bestätigung der Dialogbeendigung des Benutzers oder des Kreditinstituts",
        exmaple: "Dialog beendet"
    }],
    '0900': [{
        name: 'TAN gültig',
        relation: "Element"
    }],
    '0901': [{
        name: 'PIN gültig',
        relation: "Element"
    }],
    '0950-0999': [{
        name: "Individuell",
        relation: 'Alle',
        example: 'Individuell',
        notes: "Institutsindividuelle Rückmeldung"
    }]
}
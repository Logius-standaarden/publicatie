# Digikoppeling Release 14-11-2022: Toevoegen API-58 No sensitive information in URI's

Uit het Onderzoek ‘verwijzing naar de 'ADR API Security Extensie' vanuit de Digikoppeling Beveiligingsvoorschriften’

https://logius.nl/diensten/digikoppeling/documentatie/digikoppeling-roadmap-2022-2023#index-9

Is regel API-58 ‘No sensitive information in URIs’ gekomen als geschikt om normatief te maken.

In deze release is opgenomen:

* [Digikoppeling Koppelvlakstandaard REST-API 1.1.0](https://publicatie.centrumvoorstandaarden.nl/dk/restapi/)

## Overzicht Wijzigingen

### RFC: Toevoegen API-58 No sensitive information in URI's

Regel API-58 wordt toegevoegd aan:

https://publicatie.centrumvoorstandaarden.nl/dk/restapi/#afspraken-api-design-rules-extensies

#### Aangepaste documenten

##### Digikoppeling Koppelvlakstandaard REST-API
[Issue](https://github.com/Logius-standaarden/Digikoppeling-Koppelvlakstandaard-REST-API/issues/15) | [Pull request](https://github.com/Logius-standaarden/Digikoppeling-Koppelvlakstandaard-REST-API/pull/16) | [Preview](https://logius-standaarden.github.io/Publicatie-Preview/Digikoppeling-Koppelvlakstandaard-REST-API/Toevoegen-API-58/)
<details><summary>Wijzigingen</summary>

```diff
diff --git a/ch03_Digikoppeling Restful API profiel.md b/ch03_Digikoppeling Restful API profiel.md
index 58a2afe..e9cb78d 100644
--- a/ch03_Digikoppeling Restful API profiel.md	
+++ b/ch03_Digikoppeling Restful API profiel.md	
@@ -94,10 +94,12 @@ Hieronder wordt aangegeven welke regels uit de API Design Rules extensies in dit
 | Categorie | Principe | Extensie | Toelichting | Link |
 | --- | --- | --- | --- | --- |
 | Niet van toepassing | API-11: Secure connections using TLS | Security | Vervangen door Digikoppeling beveiligingsvoorschriften (*)  |[[Digikoppeling-Beveiligingsdocument]] |
+| Verplicht | API-58  No sensitive information in URIs | Security | | [API-58 No sensitive information in URIs  ](https://docs.geostandaarden.nl/api/def-hr-API-Strategie-ext-20211013/#api-58)|
 | Verplicht | API-13: Accept tokens as HTTP headers only | Security Authorisation | | [API-13: Accept tokens as HTTP headers only](https://docs.geostandaarden.nl/api/def-hr-API-Strategie-ext-20211013/#api-13) |
 | Aanbevolen | API-46: Use default error handling | Error handling | | [API-46: Use default error handling](https://docs.geostandaarden.nl/api/def-hr-API-Strategie-ext-20211013#api-46) |
 | Aanbevolen | API-47: Use the required HTTP status codes | Error handling  | | [API-47: Use the required HTTP status codes](https://docs.geostandaarden.nl/api/def-hr-API-Strategie-ext-20211013#api-47) |
 
+
 </span>
 
 (*) Wat betreft TLS zijn de Digikoppeling beveiligingsvoorschriften leidend , Zie [[Digikoppeling-Beveiligingsdocument]]
diff --git a/js/config.js b/js/config.js
index e105b24..a04c7e3 100644
--- a/js/config.js
+++ b/js/config.js
@@ -1,6 +1,6 @@
 var respecConfig = {
   //voor specStatus mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specStatus
-  specStatus: "DEF",
+  specStatus: "CV",
   //voor specType mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specType
   specType: "ST",
   
@@ -12,7 +12,8 @@ var respecConfig = {
   // Belangrijk: als publishDate niet opgegeven is, wordt bij de link "Laatst gepubliceerde versie" "geen" gezet. Anders wordt een link opgebouwd voor de laatste versie, met het formaat:
   publishDate: "2022-08-12",
 
-  publishVersion: "1.0.1",
+  publishVersion: "1.1.0",
+  previousPublishVersion: "1.0.1",
 
   addSectionLinks: true,
 
```

</details>

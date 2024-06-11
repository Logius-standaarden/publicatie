# Onderwerpen Digikoppeling Standaarden

In eerdere edities van de Digikoppeling roadmap liepen de onderwerpen met betrekking tot de Digikoppeling standaarden en aanverwante voorzieningen door elkaar heen. In deze editie heeft de productgroep Digikoppeling ervoor gekozen deze onderdelen afzonderlijk weer te geven. De onderwerpen van de roadmap Digikoppeling voorzieningen staan [hier](https://logius.nl/diensten/digikoppeling/documentatie/digikoppeling-roadmap-2020-2021#onderwerpen-digikoppeling-voorzieningen) .




### Digikoppeling REST API profiel baseren op ADR 2.0

_Wat is het issue of de wens?_

De API Design Rules (ADR) standaard versie 2.0 heeft een nieuwe naamgeving van API design rules geintroduceerd en versie 2.0 heeft ook een modulaire opbouw gekregen.

_Wat gaat er gebeuren?_

Het Digikoppeling REST-API profiel zal worden aangepast zodat dit in lijn is met de nieuwe versie ADR 2.0 

_Wat is het resultaat?_

Een Digikoppeling REST-API profiel gebaseerd op ADR versie 2.0 

_Wanneer gaat dit gebeuren?_

Q1 2024-Q2 2024


### Signing & Encryptie toevoegen aan RESTful API profiel

_Wat is het issue of de wens?_

Digikoppeling EBMS & WUS kennen specifieke profielen voor signing & encryptie, het huidige Digikoppeling RESTful API profiel kent dit nog niet

_Wat gaat er gebeuren?_

Het onderdeel signing en encryptie zal worden ingevuld, hierbij zal worden aangesloten op de ontwikkelingen binnen het kennisplatform API's.
Ontwikkelingen in Europese standaarden (JAdES) en ontwikkelingen in internationale standaarden worden hierbij meegenomen.

_Wat is het resultaat?_

Een Digikoppeling standaard waarin voor het Digikoppeling REST API profiel ondersteuning is voor signing & encryptie.

_Wanneer gaat dit gebeuren?_

Q1 2024-Q3 2024

### Implementatie invoering eDelivery/ebMS3/AS4

_Wat is het issue of de wens?_

De ebMS2 standaard wordt niet verder doorontwikkeld. Het ligt daarom voor de hand om te kijken of ebMS2 vervangen kan worden ebMS3. En dan met name het AS4 profiel hierop. Dit is ook onderdeel van de EU eDelivery standaard voor gegevensuitwisseling over landsgrenzen heen.
In 2018 heeft Digikoppeling laten onderzoeken of en wanneer het zinnig is om ebMS2 vervangen door de nieuwe versie. Naar aanleiding van dat onderzoek besloot het TO dat er toen geen directe aanleiding was om ebMS2 actief te vervangen.

Begin 2020 is in het TO besloten om ebMS2 weliswaar nog niet actief te vervangen, maar dat het wel zinnig is om als Digikoppeling bij te houden hoe de ondersteuning van ebMS2, vanuit leveranciers, zich ontwikkeld en al eens te verkennen welk ebMS3 profiel eventueel bruikbaar zal zijn binnen de Digikoppeling standaard.
Het eDelivery ebMS3/AS4 profiel is in principe geschikt bevonden bij deze verkenning.

In 2021/2022 zijn de ontwikkelingen verder gevolgd en werd binnen het TO Digikoppeling aangegeven dat actieve vervanging wenselijk was gezien de teruglopende ondersteuning van ebMS2 in de markt en de noodzaak om aan te sluiten op actief onderhouden standaarden.

In 2023 is ook binnen het MIDO besproken dat vervanging van het ebMS2 profiel door een ebMS3/AS4 profiel wenselijk is, en is een impact analyse gestart om te bepalen wat hiervan de impact zou zijn en welk invoeringsplan hierbij het beste gevolgd kan worden.


_Wat gaat er gebeuren?_

Digikoppeling beheer gaat op basis van de bespreking van de impact analyse en een positief besluit op het invoerplan door het MIDO de standaard documentatie aanpassen door een ebMS3/AS4 profiel op te nemen.
(in 2025 zal de nadruk liggen op ondersteuning van organisaties in het migratie proces) 

_Wat is het resultaat?_

Een Digikoppeling standaard voorzien van een ebMS3/AS4 profiel op basis van eDelivery en een migratieplan voor de overgang van ebMS2 naar ebMS3/AS4

_Wanneer gaat dit gebeuren?_

Q1 2024-Q4 2025


### Aansluiting FSC standaard op Digikoppeling

_Wat is het issue of de wens?_

In het vernieuwingsproject "Digikoppeling voor API's" is de Federated Service Connectivity Standaard (FSC) ontwikkeld.
Deze standaard is gericht op het maken van peer-to-peer connecties (middels digitale contracten) en heeft specifieke ondersteuning voor gedelegeerde autorisatie (machtigen) en logging in een API ecosysteem met een groot aantal organisaties en connecties.

_Wat gaat er gebeuren?_

De FSC standaard wordt door de projectgroep FSC ingediend als wijzigingsvoorstel (en als aanvulling) voor de Digikoppeling REST API standaard. 
De voorgestelde wijziging wordt besproken binnen het Technisch Overleg Digikoppeling, de Programeringstafel Gegevensuitwisseling en de Programmeringsraad.

_Wat is het resultaat?_

Bij een positief besluit van de MIDO gremia zal de Digikoppeling standaard worden uitgebreid met de FSC standaard voor het maken van connecties.

_Wanneer gaat dit gebeuren?_

Q1 2024-Q4 2025



### Best practice Gebruik OAuth icm Digikoppeling REST_API

_Wat is het issue of de wens?_

De OAuth standaard biedt mogelijkheden om fijnmazig te autoriseren. De OAuth standaard (mn de client credentials flow) kan gebruikt worden om systemen specifieke, beperkte rechten te geven (middels OAuth tokens met een bepaalde scope), dit naast de autorisatie op organisatie niveau (middels een PKIO certificaat en
2 zijdig TLS) .

_Wat gaat er gebeuren?_

Onderzocht gaat worden hoe OAuth ingezet kan worden bij M2M API connecties

_Wat is het resultaat?_

Een Best practice Gebruik OAuth icm Digikoppeling REST API

_Wanneer gaat dit gebeuren?_

Q3 2024-Q1 2025

### Periodiek actualiseren architectuur

_Wat is het issue of de wens?_

De Digikoppeling architectuur dient periodiek te worden bijgewerkt om goed aan te blijven aansluiten bij ontwikkelingen in de NORA, Gemma, KP-API's en andere overheidsbrede architectuur ontwikkelingen;

_Wat gaat er gebeuren?_

_Bijwerken van het huidige architectuurdocument_

_Wat is het resultaat?_

Een nieuwe versie van het architectuur document

_Wanneer gaat dit gebeuren?_

Q2 2024 & Q2 2025

### Periodiek actualiseren beveiligingsvoorschriften

_Wat is het issue of de wens?_

De Digikoppeling beveiligingsvoorschriften dienen periodiek te worden bijgewerkt om goed aan te blijven aansluiten bij de NCSC beveiligingsvoorschriften en de ontwikkelingen in de beveiligingsstandaarden;

_Wat gaat er gebeuren?_

_Bijwerken van het huidige beveiligingsvoorschriften document_

_Wat is het resultaat?_

Een nieuwe versie van het beveiligingsvoorschriften document

_Wanneer gaat dit gebeuren?_

Q3 2024 & Q3 2025



### Tijdlijn Roadmap Digikoppeling Standaarden


| Activiteit                                             | Q1 2024 | Q2 2024 | Q3 2024 | Q4 2024 | Q1 2025 | Q2 2025 | Q3 2025 | Q4 2025 |
| ------------------------------------------------------ | ------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| Digikoppeling REST API profiel baseren op ADR 2.0      | X       | X       |         |         |         |         |         |         |
| Signing & Encryptie toevoegen aan RESTful API profiel  | X       | X       | X       |         |         |         |         |         |
| Implementatie invoering ebMS3/AS4 (\*)                 | X       | X       | X       | X       | X       | X       | X       | X       |
| Aansluiting FSC standaard op Digikoppeling (\*)        | X       | X       | X       | X       | X       | X       | X       | X       |
| Best practice Gebruik OAuth icm Digikoppeling REST_API |         |         | X       | X       |         |         |         |         |
| Periodiek actualiseren architectuur                    |         | X       |         |         |         | X       |         |         |
| Periodiek actualiseren beveiligingsvoorschriften       |         |         | X       |         |         |         | X       |         |

(*) Deze onderwerpen zijn afhankelijk van besluitvorming in het MIDO, bij goedkeuring wordt in 2025 vooral een accent op ondersteuning van de implementatie van de standaard verwacht
<!--

### Onderzoek impact invoering ebMS3/AS4

_Wat is het issue of de wens?_

De ebMS2 standaard wordt niet verder doorontwikkeld. Het ligt daarom voor de hand om te kijken of ebMS2 vervangen kan worden ebMS3. En dan met name het AS4 profiel hierop. Dit is ook onderdeel van de EU eDelivery standaard voor gegevensuitwisseling over landsgrenzen heen.

In 2018 heeft Digikoppeling laten onderzoeken of en wanneer het zinnig is om ebMS2 vervangen door de nieuwe versie. Naar aanleiding van dat onderzoek besloot het TO dat er voorlopig geen directe aanleiding is om ebMS2 actief te vervangen.

Begin 2020 is in het TO besloten om ebMS2 weliswaar nog niet actief te vervangen, maar dat het wel zinnig is om als Digikoppeling bij te houden hoe de ondersteuning van ebMS2, vanuit leveranciers, zich ontwikkeld en als eens te verkennen welk ebMS3 profiel eventueel bruikbaar zal zijn binnen de Digikoppeling standaard.

_Wat gaat er gebeuren?_

Digikoppeling gaat verkennen of het eDelivery ebMS3 AS4 profiel geschikt is voor gebruik binnen Digikoppeling en wat daar nog eventueel aan toegevoegd dient te worden.

Daarnaast zal Digikoppeling partijen, die ervaring hebben met het opstellen van een eigen ebMS3 profiel, uitnodigen om in het TO te komen vertellen hoe dit proces is verlopen.

_Wat is het resultaat?_

Met bovengenoemde acties heeft Digikoppeling in de 2e helft van 2023 een goed beeld van moeilijkheden en mogelijkheden van het gebruik van de ebMS3 standaard zodat eind 2023 met het TO opnieuw besproken kan worden of en op welke termijn het zinnig is om over te gaan op de nieuwe versie.

_Wanneer gaat dit gebeuren?_

Q2 2022 -  Q4 2023



-->

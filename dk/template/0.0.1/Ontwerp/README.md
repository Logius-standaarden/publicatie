# Terugmelding

Om onjuiste gegevens in een (basis)registratie te kunnen corrigeren moeten gebruikers een terugmelding kunnen doen op onjuiste gegevens. Een voorbeeld: wanneer de politie constateert dat iemand niet meer op een adres woont waarop die persoon ingeschreven staat moet hierop een terugmelding op de Basisregistratie personen kunnen worden gemaakt. Voor een terugmelding moeten de gegevensvelden vastgelegd worden waarvan een deel verplicht is en een deel optioneel. 

## Terugmelding en DMKS

Voor een terugmelding op de basisregistraties was de [Digimelding Koppelvlakspecificatie (DMKS)](https://github.com/Logius-standaarden/Digimelding-Koppelvlakspecificatie) vastgelegd. Deze maakte gebruik van een [Digikoppeling WUS specificatie](https://github.com/Logius-standaarden/Digikoppeling-Koppelvlakstandaard-WUS). In het [TO terugmelden van 7 december 2023](https://github.com/Logius-standaarden/Overleg/tree/main/Terugmelden/2023-12-07) hebben we besloten deze niet verder te ontwikkelen maar uit te gaan van afspraken tussen bronhouders en gebruikers van een registratie. In deze repository zal een mogelijke opvolger van DMKS worden uitgewerkt.

## Uitgangspunten

1. **De standaard is bedoeld om zelf door grote registraties geimplementeerd te    worden**. Met de terugmeldstandaard kan iedere registratie een eigen terugmelddienst opzetten. Een terugmelding kan gedaan worden bij iedere registratie die een API koppelvlak aanbiedt. Voor kleine registraties kan eventueel een terugmelddienst ingericht worden waar meldingen volgens de standaard ingediend kunnen worden en op een laagdrempelige manier door een kleine registratie kunnen worden ingezien en gedownload.  
2. **De standaard is gericht op implementatie in een REST API koppelvlak**. Een WUS koppelvlak wordt als ingewikkeld en verouderd ervaren. Dit houdt breed gebruik tegen. Authenticatie is inmiddels goed mogelijk met API standaarden zoals OAuth waardoor de noodzaak voor gebruik van een WUS koppelvlak wegvalt. De _API First_ strategie die overheidspartijen hebben omarmd is ook een reden te kiezen voor een API koppelvlak. De specificatie van de gegevens die uitgewisseld worden zijn gespecificeerd in JSON.
3. **De standaard is gericht op automatische berichtverwerking**. Voor breed gebruikte registraties is het handig als terugmeldingen door systemen verwerkt kunnen worden. Voor registraties met minder terugmeldingen blijft het mogelijk om terugmeldingen volgens een afspraak in te vullen. Een bronhouder kan ervoor kiezen om terugmeldingen via email te accpeteren. Terugmeldingen volgens afspraken vallen buiten de scope van deze standaard. 
4. **Voor het aangeven om welk gegeven het gaat wordt gebruik gemaakt van een URN van het gegeven**. Om gegevens op een uniforme manier aan te duiden maken we bij voorkeur gebruik van een URI. Volgens linked data principes worden objecten aangeduid met een eenduidige URI waarmee ze online te vinden zijn. We kiezen hier voor een bredere optie: door URNs te gebruiken kunnen gegevens in (basis)registraties ook eenduidig aangeduid worden die objecten (nog) niet online te vragen zijn.

## JSON specificaties en voorbeelden

Specificaties en voorbeelden voor de berichten in vernieuwd terugmelden.

- [terugmeldingsbericht specificatie](TerugMelden%20spec.json)
- [terugmeldingsbericht voorbeeld](TerugMelden%20voorbeeld.json)
- [response op een terugmeldingsbericht](TerugMeldenResponse%20voorbeeld.json)

## Vervolgstappen

1. Harmoniseren van gebruikte termen in het berichtenontwerp met de begrippen die kader van stelselcatalogus worden gebruikt.
2. Ontwerp delen met leden van het TO Terugmelden, reacties en ideen ophalen.

### Keuzes en opties

Keuzes voor een mogelijke dienst
  - ontsluiting van terugmeldingen via een webinterface voor kleine registraties, mogelijkheid van downloaden van terugmeldingen.

Grote registraties kunnen zelf een API koppelvlak aanbieden en maken geen gebruik van een terugmelddienst.

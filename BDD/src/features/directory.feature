@directory-service
Feature:Directory Service
    Para administar el directorio 
    como desarrollador 
    quiero asegurarme que las operaciones crud atravez de las api rest funcionen bien  

    Scenario Outline: crear un contacto 
    Given un contacto <request> 
    When envio una solicitud Post a /directory
    Then yo obtengo el codigo de respuesta 201

    Examples:
      | request                                                                                               |
      | {"id":99,"name":"Dwayne Klocko","email":"Rene30@hotmail.com","phoneNumber":"1-876-420-9890"}          |
      | {"id":7,"name":"Ian Weimann DVM","email":"Euna_Bergstrom@hotmail.com","phoneNumber":"(297) 962-1879"} |

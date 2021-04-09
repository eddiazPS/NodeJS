@directory-service
Feature:Directory Service
    Para validar un imei  
    como funcionario 
    quiero asegurarme que las condiciones de validación se cumplan  

    Scenario Outline: envio un imei para validar listas blancas 
    Given un IMEI <imei>
    When ingrese el IMEI a la app
    Then obtengo el reporte true

    Examples:
      | imei                       |
      | {"imei":"123456789012333"} |
      | {"imei":"123456789012355"} |


    Scenario Outline: envio un imei para validar su estructura 
    Given dado un IMEI <imei>
    When cuando lo ingreso a la app
    Then obtengo respuesta de validacion true

    Examples:
      | imei                       |
      | {"imei":"12345678912349"} |
      | {"imei":"12346789012344"} |



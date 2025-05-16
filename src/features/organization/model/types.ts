

export type Organization = {
    id: number
    countryCode: string
    name: string
}

export interface IOrgSearch {
    businessEntityId: any
    addressList: any
    communicationsList: any
    businessEntityBriefName: string
    businessEntityName: string
    businessEntityTypeCode: string
    businessEntityTypeName: string
    taxRegistrationReasonCode: string
    taxpayer: string
    uniqueCustomsNumber: string
    id: number
    countryCode?: string
    name: string
}
//post
export interface ICreateOrganization {
    businessEntityName: string,//Полное наименование
    businessEntityBriefName?: string,//Сокращенное наименование
    businessEntityTypeName?: string,//Наименование организационно-правовой формы, в которой зарегистрирован хозяйствующий субъект
    taxRegistrationReasonCode?: string,//Код причины постановки на учет.
    uniqueCustomsNumber?: string,//Уникальный идентификационный таможенный номер
    countryCode: string,//Кодовое обозначение страны регистрации хозяйствующего субъекта
    taxpayer?: string//Идентификатор налогоплательщика
    addressList?: IAdressList[]
    communicationsList?: ICommunicationsList[]
}

export interface IAdressList {
    addressKindCode: string,// Вид адреса(адрес регистрации, фактический адрес, почтовый адрес)
    buildingNumber: string,// дом корпус строение
    cityName: string,// город
    districtName: string,// район
    postCode: string,// почтовый индекс
    postOfficeBox: string,// номер почтового ящика
    regionName: string,// наименование единицы административно-территориального деления первого уровня1
    roomNumber: string, // обозначение офиса или квартиры1
    settlementName: string,// наименование населенного пункта1
    streetName: string,// наименование элемента улично-дорожной сети городской инфраструктуры1
    territoryCode: string,// код единицы административно-территориального деления1
    countryCodeType: string//Кодовое обозначение страны
}

export interface ICommunicationsList {
    channelCode: string,//кодовое обозначение вида средства
    contact: string,//последовательность символов, идентифицирующая канал связи
    name: string// чей телефон
}

//Into Animal GET
export type OrganizationAnimal = {
    addressList: [
        {
            addressKindCode: string,
            buildingNumber: string,
            cityName: string,
            districtName: string,
            postCode: string,
            postOfficeBoxId: string,
            regionName: string,
            roomNumber: string,
            settlementName: string,
            streetName: string,
            territoryCode: string,
            unifiedCountryCode: {
                countryCode: string
            }
        }
    ],
    businessEntityBriefName: string,
    businessEntityId: string,
    businessEntityName: string,
    businessEntityTypeCode: string,
    businessEntityTypeName: string,
    communicationsList: [
        {
            channelCode: string,
            contact: string,
            name: string
        }
    ],
    countryCode: string,
    createdAt: string,
    id: number,
    taxRegistrationReasonCode: string,
    taxpayer: string,
    uniqueCustomsNumber: string,
    updatedAt: string
}
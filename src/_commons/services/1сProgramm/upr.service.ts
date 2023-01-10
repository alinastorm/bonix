import { Injectable } from '@nestjs/common';
import { Программа1сБухБониксАвто } from './бухBonixAvto.service';


/** 1с 8 "собственная разработка"  Упр Upr1cService */

@Injectable()
export class Программа1сУпр {
    private журналы: {
        экономическоеОбоснование: ЖурналЭкономическоеОбоснование,
        заказПоставщику: ЖурналЗаказПоставщику,
        ПоступлениеТоваровУслуг: ЖурналПоступлениеТоваровУслуг,
        БанковскаяВыписка: ЖурналБанковскаяВыписка,
        БлокировкаКонтрагентов: ЖурналБлокировкаКонтрагентов,
        ЗаявкаНаБлокировку: ЖурналЗаявкуНаРазблокировку,
        РазблокировкаКонтрагента: ЖурналРазблокировкаКонтрагента,
        Командировка: ЖурналКомандировка,
        РаботаСДолгами: ЖурналРаботаСДолгами,
        ДоговорКонтрагентаПоОборудованию: ЖурналДоговорКонтрагентаПоОборудованию,
        ЗаявкаНаРасходованиеДенежныхСредств: ЖурналЗаявкаНаРасходованиеДенежныхСредств,
        поступлениеЗатрат: ЖурналПоступлениеЗатрат,
        журналПоступлениеТоваровИУслуг: ЖурналПоступлениеТоваровИУслуг,
        журналПоступлениеДопРасходов: ЖурналПоступлениеДопРасходов,
        журналПеремещениеТоваров: ЖурналПеремещениеТоваров,

        ОприходованиеТовара: ЖурналОприходованиеТовара,
        ПлатежноеПоручениеИсходящее: ЖурналПлатежноеПоручениеИсходящее,
        ПлатежноеПоручениеВходящее: ЖурналПлатежноеПоручениеВходящее,
    }
    private справочники: {
        справочникКонтрагенты: СправочникКонтрагенты
    }
    private обработки: {
        импортвыписки: ОбработкаИмпортВыписки,
        разблокировкаКонтрагентовСДЗ: ОбработкаРазблокировкиКонтрагентовСДЗ,
        платежныйКалендарь2: ПлатежныйКалендарь2,
    }
    private отчеты: {
        ОтчетРаботаСДолгами: ОтчетРаботаСДолгами
    }

    /** Ручное создание заказа поставщику createSupplierOrder*/
    создатьИПровестиДокументЗаказПоставщику() {
        return this.журналы.заказПоставщику.создать().провести()
    }
    /** поиск ЗаказаПоставщику createSupplierOrder*/
    поискЗаказаПоставщику() {
        return this.журналы.заказПоставщику.поиск()
    }
    /** Ручное создание экономического обоснования createEconomicCalculation*/
    создатьИПровестиДокументЭкономическоеОбоснование() {
        this.журналы.экономическоеОбоснование.создать().провести()
    }
    /** Обработка импорта выписки из бух в упр 1с */
    запуститьОбработкуИмпортаВыписки(документы) {
        this.обработки.импортвыписки.создатьДокументыППВППИ(документы)
    }
    /** Ручное создание блокировки контрагентов
     * Кнопка заполнить заполняет контрагенты в таб часть
    */
    изменитьДокументБанковскаяВыписка() {
        this.журналы.БанковскаяВыписка.поиск().изменить()
    }
    /** Ручное создание блокировки контрагентов
     * Кнопка заполнить заполняет контрагенты в таб часть
    */
    создатьИПровестиДокументБлокировкаКонтрагентов() {
        this.журналы.БлокировкаКонтрагентов.создать().провести()
    }
    /** создать И Провести заявку на разблокировку */
    создатьИпровестиДокументЗаявкуНаРазблокировку() {
        this.журналы.ЗаявкаНаБлокировку.создать().провести()
    }
    /** создать И Провести заявку на разблокировку */
    создатьИпровестиДокументРазблокировкаКонтрагентов(data) {
        this.журналы.РазблокировкаКонтрагента.создать().провести()
    }
    /** создать И Провести документ Командировка */
    создатьИпровестиДокументКомандировка() {
        this.журналы.Командировка.создать().провести()
    }
    /** запустить Обработку разблокировки СДЗ
     * используется для разблокировки контрагентов
     * Запуск главное меню ДЗ
     * В раздел закладку заявки попадают заявки на разблокировку
     * На вкладке Документы находятся заявки на разблокировку
     * просроч кол дней просрочки
     * указывается причина которая переносится в комментарий
     * если одобрена то срабатывает . отклонена наоборот
     * если ждем деньги статус рассматривается
     * срок контроля это срок оплаты
     * если сеть магазинов у которых товар на реализации просто ставится статус одобрено
     */
    запуститьОбработкуРазблокировкиКонтрагентовСДЗ() {
        this.обработки.разблокировкаКонтрагентовСДЗ.вывестиИНформациюПоБлокировкам()
    }
    /** ручное создание документа РаботаСДолгами */
    создатьИПровестиДокументРаботаСДолгами() {
        this.журналы.РаботаСДолгами.создать().провести()
    }
    /** сформировать Отчет Долги В Работе */
    сформироватьОтчетДолгиВРаботе() {
        this.отчеты.ОтчетРаботаСДолгами.сформировать()
    }
    /** создать И Провести документ Договор Контрагента ПоОборудованию */
    создатьИпровестиДокументДоговорКонтрагентаПоОборудованию() {
        this.журналы.ДоговорКонтрагентаПоОборудованию.создать().провести()
    }
    /** создать И Провести Документ Заявка На Расходование Денежных Средств */
    создатьИпровестиДокументЗаявкаНаРасходованиеДенежныхСредств() {
        this.журналы.ЗаявкаНаРасходованиеДенежныхСредств.создать().провести()
    }
    /** просмотр переданных товаров в справочнике Контрагенты  */
    просмотрПереданныхТоваровСправочникаКонтрагентов() {
        this.справочники.справочникКонтрагенты.вывестиИнформациюОПереданныхТоварах()
    }
    /** вывести ИНформацию ПоПланируемым Платежам */
    вывестиИНформациюПоЗаявокНаРасходованиеДенежныхСредств() {
        this.обработки.платежныйКалендарь2.вывестиИНформациюПоЗаявокНаРасходованиеДенежныхСредств()
    }
    /** изменить заявку на расходование денежных средств */
    изменитьЗаявкуНаРасходованиеДенежныхСредств(изменение: any) {
        this.журналы.ЗаявкаНаРасходованиеДенежныхСредств.поиск().изменить()
    }
    /** оформить документ поступлениеЗатрат */
    оформитьДокументПоступлениеЗатрат() {
        this.журналы.поступлениеЗатрат.создать().провести()
    }
    /** оформить оформить Поступление Товаров И Услуг */
    оформитьПоступлениеТоваровИУслуг() {
        this.журналы.ПоступлениеТоваровУслуг.создать().провести()
    }
    /** оформление Доп Расходов По Импорту Товаров */
    оформлениеДопРасходовПоИмпортуТоваров() {
        this.журналы.журналПоступлениеДопРасходов.создать().провести()
    }
    оформитьПеремещениеТоваров() {
        this.журналы.журналПеремещениеТоваров.создать().провести()
    }
}
//parents class
class Журнал1с<T> {
    создать() { return {} as T }
    поиск() { return {} as T }
}
class Документ1с {
    /** Создание печатной формы Заказа поставщику  */
    вывестиНаПечать() { }
    провести() { return this }
    записать() { return this }
    изменить() { return this }
    ввестиНаОсновании(doc: any) { }
}
class Справочник1с<T> {
    изменить() { return this }
    создать() { return {} as T }
}
class Отчеты1с {
    сформировать() { }
}
//********************************************************************* */

/** справочник контрагенты */
class СправочникКонтрагенты extends Справочник1с<Контрагент> {
    вывестиИнформациюОПереданныхТоварах() { }
}
class Контрагент { }

//********************************************************************* */

/** журнал Заказ Поставщику */
class ЖурналЗаказПоставщику extends Журнал1с<ДокументЗаказПоставщику> { }
/** документ Заказа поставщику SupplierOrderDoc*/
class ДокументЗаказПоставщику extends Документ1с { }
/** журнал Экономическое обоснование EconomicCalculationDoc*/
class ЖурналЭкономическоеОбоснование extends Журнал1с<ДокументЭкономическоеОбоснование>{ }
/** документ Экономическое обоснование EconomicCalculationDoc*/
class ДокументЭкономическоеОбоснование extends Документ1с { }

/** журнал ПоступлениеТоваровУслуг */
class ЖурналПоступлениеТоваровУслуг extends Журнал1с<ДокументПоступлениеТоваровУслуг> { }
/** документ Поступление товаров и услуг GoodsReceiptDoc*/
class ДокументПоступлениеТоваровУслуг extends Документ1с { }

/** журнал ОприходованиеТовара */
class ЖурналОприходованиеТовара extends Журнал1с<ДокументОприходованиеТовара> { }
/** документ Оприходование товара putGoodsIntoStorageDoc*/
class ДокументОприходованиеТовара extends Документ1с { }

/** журнал ПлатежноеПоручениеИсходящее */
class ЖурналПлатежноеПоручениеИсходящее extends Журнал1с<ДокументПлатежноеПоручениеИсходящее> { }
/** документ ППИ */
class ДокументПлатежноеПоручениеИсходящее extends Документ1с { }

/** журнал ПлатежноеПоручениеВходящее */
class ЖурналПлатежноеПоручениеВходящее extends Журнал1с<ДокументПлатежноеПоручениеВходящее> { }
/** документ ППВ */
class ДокументПлатежноеПоручениеВходящее extends Документ1с { }

/** журнал ДокументБанковскаяВыписка */
class ЖурналБанковскаяВыписка extends Журнал1с<ДокументБанковскаяВыписка> { }
/** документ Банковская выписка */
class ДокументБанковскаяВыписка extends Документ1с { }

/** журнал ДокументБлокировкаКонтрагентов */
class ЖурналБлокировкаКонтрагентов extends Журнал1с<ДокументБлокировкаКонтрагентов> { }
/** документ БлокировкаКонтрагентов */
class ДокументБлокировкаКонтрагентов extends Документ1с { }

/** журнал ДокументЗаявкуНаРазблокировку */
class ЖурналЗаявкуНаРазблокировку extends Журнал1с<ДокументЗаявкуНаРазблокировку> { }
/** документ Заявку На Разблокировку */
class ДокументЗаявкуНаРазблокировку extends Документ1с { }

/** журнал ДокументРазблокировкаКонтрагента */
class ЖурналРазблокировкаКонтрагента extends Журнал1с<ДокументРазблокировкаКонтрагента> { }
/** документ Заявку На Разблокировку */
class ДокументРазблокировкаКонтрагента extends Документ1с { }

/** журнал ДокументКомандировка */
class ЖурналКомандировка extends Журнал1с<ДокументКомандировка> { }
/** документ Командировка */
class ДокументКомандировка extends Документ1с { }

/** журнал ДокументРаботаСДолгами */
class ЖурналРаботаСДолгами extends Журнал1с<ДокументРаботаСДолгами> { }
/** документ Работа с долгами */
class ДокументРаботаСДолгами extends Документ1с { }

/** журнал ДокументДоговорКонтрагентаПоОборудованию */
class ЖурналДоговорКонтрагентаПоОборудованию extends Журнал1с<ДокументДоговорКонтрагентаПоОборудованию> { }
/** документ договор контрагента по оборудованию */
class ДокументДоговорКонтрагентаПоОборудованию extends Документ1с { }

/** журнал ДокументЗаявкаНаРасходованиеДенежныхСредств */
class ЖурналЗаявкаНаРасходованиеДенежныхСредств extends Журнал1с<ДокументЗаявкаНаРасходованиеДенежныхСредств> { }
/** документ заявка на расходование денежных средств */
class ДокументЗаявкаНаРасходованиеДенежныхСредств extends Документ1с { }

/** журнал ДокументПоступлениеЗатрат */
class ЖурналПоступлениеЗатрат extends Журнал1с<ДокументПоступлениеЗатрат> { }
/** документ Поступление Затрат */
class ДокументПоступлениеЗатрат extends Документ1с { }

/** журнал ЖурналПоступлениеТоваровИУслуг */
class ЖурналПоступлениеТоваровИУслуг extends Журнал1с<ДокументПоступлениеТоваровИУслуг> { }
/** Документ Поступление Товаров И Услуг */
class ДокументПоступлениеТоваровИУслуг extends Документ1с { }

/** журнал ЖурналПоступлениеДопРасходов */
class ЖурналПоступлениеДопРасходов extends Журнал1с<ДокументПоступлениеДопРасходов> { }
/** Документ Поступление Доп Расходов */
class ДокументПоступлениеДопРасходов extends Документ1с { }

/** журнал ЖурналПеремещениеТоваров */
class ЖурналПеремещениеТоваров extends Журнал1с<ДокументПеремещениеТоваров> { }
/** документ ПеремещениеТоваров */
class ДокументПеремещениеТоваров extends Документ1с { }

//********************************************************************* */

/** отчет Работа с долгами */
class ОтчетРаботаСДолгами extends Отчеты1с { }

//********************************************************************* */


/** обработка импорт выписки */
class ОбработкаИмпортВыписки {
    создатьДокументыППВППИ(docs: any) { }
}

/** обработка ОбработкаРазблокировкиКонтрагентовСДЗ */
class ОбработкаРазблокировкиКонтрагентовСДЗ {
    вывестиИНформациюПоБлокировкам() { }
}
/** обработка ОбработкаРазблокировкиКонтрагентовСДЗ */
class ПлатежныйКалендарь2 {
    вывестиИНформациюПоЗаявокНаРасходованиеДенежныхСредств() { }
}


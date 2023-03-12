import { Бухгалтерия } from './бухгалтерия.service'
import { ЕленаШевчюк } from '../финотдел/шевчюкЕлена.service'
import { ГалинаВинарская } from '../офисМенеджер/oficeManager.service'



/** Бухгалтерия */
export class ЕленаМалиновская extends Бухгалтерия {

    private еленаШевчюк: ЕленаШевчюк
    private галинаВинарская: ГалинаВинарская

    /** Блажина: закрытие Валютных Договоров
     * Закрытие валютных договоров
     * нет предоплаты а есть по факту
     * после оплаты по банку проводит закрытие контрагента
     */
    закрытиеВалютныхДоговоров() { }

    /** 1 оформить документ заправки транспорта */
    оформитьЗаправкиТранспорта() {
        super.оформитьЗаправкиТранспорта()
    }
    /** 1.1 сверить документ заправки транспорта */
    сверитьЗаправкиТранспорта() {
        super.сверитьЗаправкиТранспорта()
    }
    /** 1.2 печать путевого листа */
    печатьПутевогоЛиста() {
        super.печатьПутевогоЛиста()
    }
    /** 2 сверка остатков по счетам */
    сверитьОстаткиПоСчетам() {
        super.сверитьОстаткиПоСчетам()
    }
    /** 2.1 внесение заявок на оплату */
    оформитьЗаявкуНаОплату() {
        super.оформитьЗаявкуНаОплату()
    }
    /** Елена Шевчук утв Владимир*/
    согласованиеЗаявокНаРасходованиеДенежныхСредств() {
        super.согласованиеЗаявокНаРасходованиеДенежныхСредств()
    }
    /** 2.2 перенести заявок на оплату */
    перенестиДатуОплатыЗаявкиНаОплату() {
        super.перенестиДатуОплатыЗаявкиНаОплату()
    }
    /** 3 Бух учет Платежи
     * веду
     */
    проведениеПлатежейВБух1с() {
        super.проведениеПлатежейВБух1с()
    }
    /** 4 Бух учет Касса
     * веду кассу аппарат
     * приезжают водители сдают z отчеты
     * в упр никаких действий по кассе не делаю
     * приезжает водитель сдает заявки и сколько денег принял по заявке
     * я записываю от какого покупателя заявка и сколько денег
     * после сдачи z отчета я сбрасываю эту информацию от кого и сколько  оплачено по заявке шевчук и она привязывает в упр программе
     */
    принятьОтчетОбОплатеКонтрагентаОтВодителя(инфОбОплате: any, zотчет: any, накладные: any, заявки: any) {
        this.еленаШевчюк.оформитьРозничныеПродажи(инфОбОплате)
    }
    /** 5.0 Бух учет Зарплата
     * веду
     * Делаю начисление зарплаты по штатному расписанию бух учета . Ни с кем не согласовываю и не утверждаю.
     * есть табель 
     * отпуска больничные листы все приносят мне 
     * я формирую табель в бух программе 1с ХС
     * отдаю секретарю она сверяет явки неявки и уже на основании табеля по окладам
     * считается зп
     */
    оформитьНачислениеЗарплаты(штатноеРасписание: any, табель: any, отпуска: any, больничные: any,) {
        const начисленаяЗп = () => {
            return штатноеРасписание * (табель - отпуска - больничные)
        }
        super.оформитьЗаявкуНаОплату()
    }
    /** 5.1 мне с упр учета дают сумму премии которую должен получить сотрудник
     * я накручиваю налоги и произвожу начисление по списку по банку проходит та цифра которую соттрудник должен получить
     */
    оформитьПремию(суммаПремии: any) {
        super.оформитьЗаявкуНаОплату()
    }
    /** 6 Бух учет Списание топлива */
    оформитьСписаниеТопливаВБух() {
        super.оформитьСписаниеТопливаВБух()
    }
    /** 7 Бух учет Розница */
    оформитьРозничныеПродажиБух() {
        super.оформитьРозничныеПродажиБух()
    }
    /** 8 Бух учет Авансовые отчеты */
    оформитьАвансовыеОтчетыБух() {
        super.оформитьАвансовыеОтчетыБух()
    }
    /** 9 Бух учет Авансовые отчеты */
    оформитьКомандировкиБух() {
        super.оформитьКомандировкиБух()
    }

    /** 10.1 сформировать и отправить на проверку Табель учета рабочего времени
     * я формирую табель в бух программе 1с ХС
     * отдаю секретарю она сверяет явки неявки и уже на основании табеля по окладам
     */
    сформироватьТабельУчетаРабочегоВремени() {
        const табель = super.сформироватьТабельУчетаРабочегоВремени()
        this.галинаВинарская.сверкаТабеляУчетаРабочегоВремени(табель)
    }
    /** 10.2 сформироватьРасчетнуюВедомость */
    сформироватьРасчетнуюВедомость() {
        super.сформироватьРасчетнуюВедомость()
    }
    /** 10.3 сформироватьРасчетОтпусковИБольничных */
    сформироватьРасчетОтпусковИБольничных() {
        super.сформироватьРасчетОтпусковИБольничных()
    }
}

import { Бухгалтерия } from 'src/бухгалтерия/бухгалтерия.service'
import { ЭлектроннаяПочта } from 'src/_commons/services/email/email.service'
import { Программа1сУпр } from 'src/_commons/services/1сProgramm/upr.service'

import { Excel } from '../_commons/services/excel/excel.service'

const restartTimeSeconds = +process.env.TIME_RESTART_PERIODICTASKS_SECONDS ?? 10 * 1000


/**
 * Вадим Гончаров декларант
 * Андрей Достанко Специалист по внешнеэкономической деятельности
 * Денис Лекомцев Заведующий сектором - специалист по ВЭД
 * Александр Пикун Специалист по ВЭД
 */
export class ВЭД {
    runTime = ''
    // goods = [{ brend: 'Champion', remains: 0, order: this.заказатьТоварChampionAvista }]
    // tasks = [
    //     { task: this.анализОстатковНаСкладе, timeout: 100 },
    //     { task: this.заказатьТоварChampionAvista, timeout: 100 }, //и тд
    // ]
    constructor(
        private accauntingDepartmentService: Бухгалтерия,
        private upr1cService: Программа1сУпр,
        private emailService: ЭлектроннаяПочта,
        private программа1сУпр: Программа1сУпр,

        private Excel: Excel,

    ) {
        //  this.runScheduledTasks() 
    }

    /** Запустить запланированные задачи */
    // runScheduledTasks() {
    //     setInterval(() => {
    //         this.tasks.forEach(({ task, timeout }) => {
    //             if (new Date().toISOString() > this.runTime + timeout) {
    //                 task()
    //             }
    //         })
    //     }, restartTimeSeconds)
    // }
    // /** Анализ остатков на складе analysGoodsBalance */
    // анализОстатковНаСкладе() {
    //     //TODO Как они анализируют?
    //     this.goods.forEach((product) => {
    //         if (product.remains < 100) {
    //             const count = 100 - product.remains
    //             product.order()
    //         }
    //     })
    // }
    // /** Заказ товара Champion 
    //  * orderItemsChampionAvista
    // */
    // заказатьТоварChampionAvista() {
    //     //TODO Как заказывают?
    // }
    // /** Заказ товара  Avista
    //  * orderItemsChampionAvista
    // */
    // заказатьТоварAvista() {
    //     //TODO Как заказывают?
    // }
    // /** Заказ товара Роснефть
    //  * orderItemsRosNeft
    // */
    // заказатьТоварРоснефть() {
    //     //TODO Как заказывают?
    // }
    // /** Заказ товара Газпромнефть
    //  * orderItemsGazPromNeft
    // */
    // заказатьТоварГазпромНефть() {
    //     //TODO Как заказывают?
    // }
    // /** Заказ товара ТосолСинтез
    //  * orderItemsTosolSintez
    // */
    // заказатьТоварТосолСинтез() {
    //     //TODO Как заказывают?
    // }
    // /** Заказ товара Fuchs
    //  * orderItemsFuchs
    // */
    // заказатьТоварFuchs() {
    //     //TODO Как заказывают?
    // }
    // /** Заказ товара Senfineco orderItemsSenfineco */
    // заказатьТоварSenfineco() {
    //     //TODO Как заказывают?
    // }
    // /** Заказ товара Paloma orderItemsPaloma*/
    // orderItemsPaloma() {
    //     //TODO Как заказывают?
    // }
    // /** Заказ товара Eneos orderItemsEneos*/
    // заказатьТоварEneos() {
    //     //TODO Как заказывают?
    // }
    // /** Заказ товара РБ перекупного orderItemsOverBought*/
    // заказатьТоварПерекупнойРБ() {
    //     //TODO Как заказывают?
    // }
    // /** создает заказ поставщику createOrderSuplier*/
    // создатьДокументЗаказПоставщику() {
    //     //TODO что там внутри ? Кто что? Какие документы формат
    //     this.upr1cService.создатьИПровестиДокументЗаказПоставщику()
    // }
    // /** Создание документов для импорта товаров createImportDocumentsForImportItems
    //  * подготовка документов на ввоз
    // */
    // создатьДокументыДляИмпортаТоваров() {
    //     //TODO Какие документы и как создаются?
    //     //что то делают и в конце уведамляют бухгалтерию

    // }
    // /** уведомить бухгалтерию отправив им заказ поставщику */
    // уведомитьБухгалтериюОтправивПисьмоСЗаказомПоставщику() {
    //     //TODO
    //     const docs = ''
    //     //TODO От кого?
    //     const sender = ''
    //     //TODO От кому?
    //     const receiver = ''
    //     const email = { sender, receiver, data: docs }
    //     this.emailService.отправитьЭлектронноеПисьмо(email)
    // }

    /** 1 Создание номенклатуры
     * 
     */
    cозданиеНоменклатуры() {
        this.программа1сУпр.созданиеСправочникаНоменклатура()
    }
    /** Создание номенклатуры комплектации 
     * поступила заявка идет такая то акция будем делать комплекты
     * логисту скидывают информацию что будет комплектоваться  
     * он создает карточку 
     * ставит вид набор
     * указывает комплектующие из чего состоит набор
    */
    cозданиеНоменклатурыКомплектации() {
        this.программа1сУпр.созданиеСправочникаНоменклатураКомплект()
    }
    /** оформление заявок на отгрузки рос контрагентам
   * логисты или брен д менеджеры приносят счета
   * сегодня артем приносит заявку по закрепленному за ним клиенту 
   * кому он отгружал с боникс рф
   * он принес готовые счета в бумажном виде с номенклатурой и ценами
   * и мне нужно в базе сделать передачу между организациями (реализация на экспорт)
   * я создаю  документ и заполняю его руками
   */
    оформитьЗаявкуНаЭкспортнуюОтгрузку() {
    }
    /** подготовить Драфт Заказа Поставщику */
    подготовитьДрафтЗаказаПоставщику(ExcelЗаказПоставщику: any) {
        const драфтПоКонтрагенту = { ExcelЗаказПоставщику }
        return драфтПоКонтрагенту
    }
    /** отправить Драфт Заказа Поставщику и получить invoice */
    отправитьДрафтЗаказаПоставщику(драфтПоКонтрагенту: any) {
        this.emailService.отправитьЭлектронноеПисьмо(драфтПоКонтрагенту)
    }
    /** получить подтвержденный invoice поставщика на основе драфта заказа */
    получитьInvoiceПоставщика() {
        this.emailService.получитьЭлектронноеПисьмо()
        const invoice = this.emailService.получитьЭлектронноеПисьмо()
        return invoice
    }
    /** получить проформы заказа от поставщика
     * у каждого поставщика своя форма заказа
     */
    приемПроформыЗаказаОтПоставщика() {
    }
    /** оформить Заказ Поставщику
     * После получения подтверждения invoice проформа
     * Проформу я вношу в 1с Заказ Поставщику вручную
     */
    оформитьЗаказПоставщику() {
        this.программа1сУпр.создатьИПровестиДокументЗаказПоставщику()
    }
    /** получить Дату Отгрузки
     * Идет оплата после получения инвойса
     * Формируется дата когда поставщик будет готов отгрузить
     * На эту дату заказывается транспорт . Машина поехала в РБ
     * Готовятся документы для растаможки
     */
    получитьДатуОтгрузкиПоставщика() {
        this.emailService.получитьЭлектронноеПисьмо()
    }
    /** заказать Транспорт Доставки Товара Со Склада Поставщика До */
    заказатьТранспортДоставкиТовараСоСкладаПоставщикаДо() {
        //TODO описание процесса заказа
    }

    /** подготовка Файла Для Декларанта
     * Разработкой формул занимался сам
     * Я готовлю документы для растаможки.
     * Вношу веса брутто нетто коды тнвд
     * Этот файл декларант подгружает в программу
     * вставляю из 1с Заказа поставщику в закладку Приход1с
     * Заполняется вкладка Вадиму (формулы через впр)
     * формулы не срабатывают если номенклатура не совпадает
     * брутто нетто может меняться . так как они близки к тому что забито в программе но не точны. А мне нужно до сотой дробной части
     */
    подготовкаФайлаДляДекларанта() {
        this.Excel.создатьExcell()
    }
    /** сформироватьТранспортныеРасходы */
    сформироватьТранспортныеРасходы() {
        //TODO описание процесса
    }
    /** подача Транспортных Расходов Декларанту
     * Подаю декларанту транспортные расходы
     * @param трансРасходы 
     */
    подачаТранспортныхРасходовДекларанту(трансРасходы: any) {
        this.emailService.отправитьЭлектронноеПисьмо(трансРасходы)
    }
    /** оплата Таможенных Платежей
     * Формируем курс
     * В день когда происходит растаможка декларант отправляет мне на оплату платежи для растаможивания товара 50, 5010, 1010, 2010 -НДС Пошлина 
     */
    оплатаТаможенныхПлатежей() {
        this.emailService.получитьЭлектронноеПисьмо()
        // TODO как происходит процесс оплаты?
    }
    /** перепродажаТовараПередИмпортом */
    перепродажаТовараПередИмпортом() {
        //Закрытая информация
    }
}

import { ProductService } from './product.service'



/** Бренд менеджеры, продукт группа
 * Артем Чумак Бренд-менеджер AVISTA, Газпром, G-Energy, Тосол-Синтез
 */
export class АртемЧумак extends ProductService {


    /** 1 Подготовить заказ поставщику
     * AVISTA, Газпром, G-Energy, Тосол-Синтез
     * Я создаю на основе расчетной таблички
     * Опорный файл для заказа поставщикам 
     * Вносятся продажи за период резервы, свободный остаток
     * Заказ KZ 22,3  сформированный мной заказ 22,4 доформированный
     * используется кратность согласно вместимости груза в транспорте(20т)  и коробок в полете (35 коробок в полете)
     * Вместимость склада не учитывается
     */
    подготовитьЗаказПоставщику() {
        return super.подготовитьЗаказПоставщику()
    }
    /** 2 передать заказ поставщику Лекомцеву */
    передатьЗаказПоставщику(ExcelЗаказПоставщику: any) {
        super.передатьЗаказПоставщику(ExcelЗаказПоставщику)
    }
    /** 3 установка цен номенклатуры
     * В части формирования цены товары делятся на регулируемые и не регулируемые
     * Например регулируются моторные масла
     * Мы применили к ним в эо максимально допустимую наценку 45% и получили максимальную цену с ндс выше которой не имеем право продавать
     * на позиции в эо применяются максимальные цены как максимально допустимые и программа не будет давать возможность отгружать с ценой выше
     * но нужно сформировать цены
     * стандартная скидка для оптового клиента 26%
     * данные из эо выгружаю в excell 1
     * вывожу по формулам цены
     * нахожу установку цен по бренду
     * вывожу в ексель 2
     * через впр подтягиваю позиции из эксель 1
     * отфильтровал эксель 2
     * через импорт загружаю эксель 2 в установку цен и эти цены начинают действовать с даты установки цен
     * Установок цен две одинковых с разными типами цен . В одной 1 в другой Р
     * типы цен используются два вида
     * 1 накладные
     * Р это продажа через интернет магазин (водителями) с использованием кассы
     * Делается это потому что на примере Avista устанавливаются базовые цены 1 в EUR
     * а в Р в BYN
     * по внутреннему упр курсу пересчитывается
     * в рознице сразу byn     * 
     */
    оформитьУстановкуЦенНоменклатуры() {
        super.оформитьУстановкуЦенНоменклатуры()
    }
    /** 4 публикация новости
     * после формирования цен публикуем новость в битрикс
     * товар оприходован и его можно пускать в продажу
     * теперь 14 человек видели и могут продавать товар
     * Надежду Блажину просит Артем опубликовать новость я: но правильно что бы публиковал Артем
     */
    уведомитьОСтартеПродаж() {
        super.уведомитьОСтартеПродаж()

    }
    /** 5 переговоры с поставщиком
     * все уточнения информации
     */
    провестиПереговорыСПоставщиком() {
        super.провестиПереговорыСПоставщиком()
    }
    /** 6 РазмещениеЗаказаПокупателя */
    размещениеЗаказаПокупателя() {
        super.размещениеЗаказаПокупателя()
    }
    /** 7 сформировать ежемесячный план по валовой прибули для торгового отдела */
    сформироватьПланВаловойПрибылиТорговогоОтдела() {
        super.сформироватьПланВаловойПрибылиТорговогоОтдела()
    }
    /** 8 сформировать акции специальные предложения */
    сформироватьАкции() {
        super.сформироватьАкции()
    }
    /** 9 еженедельное ОПЕРАТИВНОЕ ПЛАНИРОВАНИЕ  */
    оперативноеПланирование() {
        super.оперативноеПланирование()
    }
}
import { ProductService } from './product.service'

/** Бренд менеджеры, продукт группа
 * Антон Зюськин Бренд-менеджер CHAMPION, Senfineco, Paloma, Роснефть
 */

export class AntonZuskin extends ProductService {

    /** подготовить заказ поставщику
     * CHAMPION, Senfineco, Paloma, Роснефть
     */
    подготовитьЗаказПоставщику() {
        return super.подготовитьЗаказПоставщику()
    }
    /** передать заказ поставщику Лекомцеву */
    передатьЗаказПоставщику(ExcelЗаказПоставщику: any) {
        super.передатьЗаказПоставщику(ExcelЗаказПоставщику)
    }

}
import { Программа1сУпр } from 'src/_commons/services/1сProgramm/upr1c.service';
import { ЭлектроннаяПочта } from 'src/_commons/services/email/email.service';
import { Бухгалтерия } from 'src/бухгалтерия/бухгалтерия.service';

/**
 * Елена Шевчук  Экономист
 */

export class ФинОтдел {

    constructor(
        private бухгалтерия: Бухгалтерия,
        private электроннаяПочта: ЭлектроннаяПочта,
        private программа1сУпр: Программа1сУпр
    ) {
        //  this.runScheduledTasks() 
    }
    /** импортировать операции оказанных услуг из бух в упр */
    импортОперацийОказанныхУслугИзБухВУпр() {

    }
    /** созданиеГруппыРегулирумогоТовара
   *  Контроль поступающего товара
   * лена шевчук и бренд менеджеры просматривают поступаемые товары и если нет пополняют справочник группы регулируемых товаров (э.о.)
   * Указывается группа и ее наценка
   */
    созданиеГруппыРегулирумогоТовара() {
        this.программа1сУпр.созданиеГруппыРегулирумогоТовара()
    }
    /** созданиеКонтрагента
   * по контрагентам РФ данные подают Лене Шевчук или ОКС
   * и они заводят контрагента и прикрепляют договор
   */
    созданиеКонтрагента(договор: any) {
        this.программа1сУпр.созданиеКонтрагента(договор)
    }
    /** контрольВалютныхДоговоров */
    контрольВалютныхДоговоров() {
    }
    /** оформить Розничную Продажу */
    оформитьРозничнуюПродажу(инфОбОплате: any) {
    }


}
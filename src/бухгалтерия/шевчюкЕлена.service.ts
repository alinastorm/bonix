import { Injectable } from '@nestjs/common';
import { Бухгалтерия } from './accaunting.service'



/** Бухгалтерия AccauntingDepartmentService */
@Injectable()
export class ЕленаШевчюк extends Бухгалтерия {

    /** только расходная часть */
    импортироватьДокументыППВИзБухВУпр() {
        super.импортироватьДокументыППВИзБухВУпр()
    }
    /** импорт услуг из бух в ут
     * Я разношу в бух базе
     * Елена Шевчук делает импорт в упр
     */
    импортОперацийОказанныхУслугИзБухВУпр() {
        super.импортОперацийОказанныхУслугИзБухВУпр()
    }
}
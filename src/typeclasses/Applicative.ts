import { Apply } from './Apply'

export interface Applicative<T> extends Apply<T> {
    of(value: T): Applicative<T>
    'fantasy-land/of'?: Applicative<T>['of']
}
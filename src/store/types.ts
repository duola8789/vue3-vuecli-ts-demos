import {RootState} from '@/store/root-store/interface-types';
import {ExampleState} from '@/store/modules/example/interface-types';

export interface AllStateTypes extends RootState {
  example: ExampleState;
}

import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 8730,
  title: 'lawful above unless',
  content: 'save',
  date: dayjs('2024-12-30T00:40'),
};

export const sampleWithPartialData: IPost = {
  id: 28272,
  title: 'unless or supportive',
  content: 'vol blah graceful',
  date: dayjs('2024-12-30T05:34'),
};

export const sampleWithFullData: IPost = {
  id: 9917,
  title: 'clearly darn icy',
  content: 'wide recount',
  date: dayjs('2024-12-29T11:29'),
};

export const sampleWithNewData: NewPost = {
  title: 'willfully settler',
  content: 'consequently',
  date: dayjs('2024-12-29T12:46'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

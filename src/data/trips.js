const {getDistance} = require('geolib');
const newbase60 = require('newbase60');
const getPlace = require('../../lib/utils/get-place.js');

module.exports = function () {
  let trips = [{
    date: '2003-11-02',
    from: 'LHR',
    to: 'SYD',
    via: ['BKK'],
  }, {
    date: '2003-11-27',
    from: 'SYD',
    to: 'CNS',
  }, {
    date: '2003-11-30',
    from: 'CNS',
    to: 'SYD',
  }, {
    date: '2003-12-06',
    from: 'SYD',
    to: 'BHX',
    via: ['DXB'],
  }, {
    date: '2005-12-12',
    from: 'LHR',
    to: 'SFO',
  }, {
    date: '2005-12-18',
    from: 'SFO',
    to: 'LHR',
  }, {
    date: '2006-02-07',
    from: 'LHR',
    to: 'SFO',
  }, {
    date: '2006-05-05',
    from: 'SFO',
    to: 'LHR',
  }, {
    date: '2006-06-26',
    from: 'LTN',
    to: 'CIA',
  }, {
    date: '2006-06-29',
    from: 'XRJ',
    to: 'ZMS',
  }, {
    date: '2006-06-29',
    from: 'ZMS',
    to: 'XRJ',
  }, {
    date: '2006-07-01',
    from: 'CIA',
    to: 'LTN',
  }, {
    date: '2006-10-03',
    from: 'BHX',
    to: 'SFO',
    via: ['FRA'],
  }, {
    date: '2006-11-05',
    from: 'SFO',
    to: 'JFK',
  }, {
    date: '2006-11-07',
    from: 'JFK',
    to: 'SFO',
  }, {
    date: '2006-12-23',
    from: 'SFO',
    to: 'BHX',
    via: ['MUC'],
  }, {
    date: '2007-01-05',
    from: 'BHX',
    to: 'SFO',
    via: ['AMS'],
  }, {
    date: '2007-01-19',
    from: 'SFO',
    to: 'LAS',
  }, {
    date: '2007-01-21',
    from: 'LAS',
    to: 'SFO',
  }, {
    date: '2007-03-10',
    from: 'SFO',
    to: 'AUS',
  }, {
    date: '2007-03-12',
    from: 'AUS',
    to: 'SFO',
  }, {
    date: '2007-04-13',
    from: 'SFO',
    to: 'BHX',
    via: ['MUC'],
  }, {
    date: '2007-04-23',
    from: 'BHX',
    to: 'SFO',
    via: ['FRA'],
  }, {
    date: '2007-07-18',
    from: 'SFO',
    to: 'YUL',
  }, {
    date: '2007-07-22',
    from: 'YUL',
    to: 'SFO',
    via: ['LAX'],
  }, {
    date: '2007-08-04',
    from: 'SFO',
    to: 'JFK',
  }, {
    date: '2007-08-08',
    from: 'JFK',
    to: 'SFO',
  }, {
    date: '2007-08-31',
    from: 'SFO',
    to: 'BHX',
    via: ['MUC'],
  }, {
    date: '2007-09-10',
    from: 'BHX',
    to: 'SFO',
    via: ['FRA'],
  }, {
    date: '2007-11-22',
    from: 'SFO',
    to: 'LAX',
  }, {
    date: '2007-11-24',
    from: 'LAX',
    to: 'SFO',
  }, {
    date: '2007-12-17',
    from: 'SFO',
    to: 'BHX',
    via: ['DUB'],
  }, {
    date: '2008-01-15',
    from: 'BHX',
    to: 'SFO',
    via: ['MUC'],
  }, {
    date: '2008-02-03',
    from: 'SFO',
    to: 'BHX',
    via: ['MUC'],
  }, {
    date: '2008-03-06',
    from: 'BHX',
    to: 'AUS',
    via: ['EWR'],
  }, {
    date: '2008-03-11',
    from: 'AUS',
    to: 'SJC',
    via: ['PHX'],
  }, {
    date: '2008-03-18',
    from: '849VRPR5+57',
    to: '86HJV9H5+FR',
  }, {
    date: '2008-03-22',
    from: 'ORD',
    to: 'BHX',
    via: ['EWR'],
  }, {
    date: '2008-09-30',
    from: 'BHX',
    to: 'SEA',
    via: ['CPH'],
  }, {
    date: '2008-10-03',
    from: '84VVHMXC+92',
    to: '849VRPR5+57',
  }, {
    date: '2008-10-10',
    from: 'SFO',
    to: 'ORD',
  }, {
    date: '2008-10-16',
    from: 'MDW',
    to: 'IAD',
  }, {
    date: '2008-10-21',
    from: 'IAD',
    to: 'BHX',
    via: ['MUC'],
  }, {
    date: '2009-01-25',
    from: 'LHR',
    to: 'SFO',
  }, {
    date: '2009-02-05',
    from: 'SFO',
    to: 'LHR',
  }, {
    date: '2009-12-17',
    from: 'LHR',
    to: 'AKL',
    via: ['LAX'],
  }, {
    date: '2009-12-21',
    from: '4VMP5Q49+84',
    to: '4VCPPQCJ+84',
  }, {
    date: '2009-12-22',
    from: '4VCPPQPP+8R',
    to: '4VCPP274+V4',
  }, {
    date: '2009-12-27',
    from: '4VCPP274+V4',
    to: '4VCPPQPP+8R',
  }, {
    date: '2009-12-29',
    from: 'WLG',
    to: 'SYD',
  }, {
    date: '2010-01-02',
    from: 'SYD',
    to: 'MEL',
  }, {
    date: '2010-01-07',
    from: 'MEL',
    to: 'LHR',
    via: ['DXB'],
  }, {
    date: '2010-11-08',
    from: '9C2XRVH5+GJ',
    to: '9C6PH3WM+34',
    via: ['ZEP', 'QQU', '9C5Q8959+3H', '9C5Q895C+PC', '9C5M8RW3+2G', '9C5M9Q22+92'],
  }, {
    date: '2010-11-14',
    from: '9C6PH3WM+34',
    to: '9C2XRVH5+GJ',
    via: ['9C5M9Q22+92', '9C5M8RW3+2G', '9C5Q895C+PC', '9C5Q8959+3H', 'QQU', 'ZEP'],
  }, {
    date: '2011-03-10',
    from: 'LHR',
    to: 'AUS',
    via: ['ATL'],
  }, {
    date: '2011-03-15',
    from: 'AUS',
    to: 'SFO',
    via: ['LAS'],
  }, {
    date: '2011-03-20',
    from: 'SFO',
    to: 'BSB',
    via: ['YYZ', 'GRU'],
  }, {
    date: '2011-03-24',
    from: 'BSB',
    to: 'GRU',
  }, {
    date: '2011-03-29',
    from: 'GRU',
    to: 'LHR',
    via: ['AMS'],
  }, {
    date: '2011-10-21',
    from: 'LHR',
    to: 'IAD',
    via: ['YUL'],
  }, {
    date: '2011-10-25',
    from: 'IAD',
    to: 'YOW',
  }, {
    date: '2011-10-27',
    from: 'XDS',
    to: 'YBZ',
  }, {
    date: '2011-10-30',
    from: 'YYZ',
    to: 'YVR',
  }, {
    date: '2011-11-03',
    from: 'XEA',
    to: '849VRPR5+57',
  }, {
    date: '2011-11-06',
    from: 'SFO',
    to: 'LHR',
    via: ['YYZ'],
  }, {
    date: '2012-03-08',
    from: '9C2XRVH5+GJ',
    to: 'AUS',
    via: ['ZEP', 'LHR', 'DFW'],
  }, {
    date: '2012-03-20',
    from: 'SFO',
    to: '9C2XRVH5+GJ',
    via: ['LHR', 'ZEP'],
  }, {
    date: '2012-05-09',
    from: '9C2XRVH5+GJ',
    to: 'AMS',
    via: ['LGW'],
  }, {
    date: '2012-05-13',
    from: 'ZYA',
    to: '9C2XRVH5+GJ',
    via: ['ZYR', 'QQS', 'ZEP'],
  }, {
    date: '2012-05-16',
    from: '9C2XRVH5+GJ',
    to: 'CPH',
    via: ['LGW'],
  }, {
    date: '2012-05-17',
    from: 'CPH',
    to: '9C2XRVH5+GJ',
    via: ['LGW'],
  }, {
    date: '2012-06-02',
    from: '9C2XRRWV+9X',
    to: '8CXVFF4C+W9',
    via: ['9C2XRRPH+2H', '9C2WXJ2P+8Q', '9C2WP253+6R'],
  }, {
    date: '2012-06-05',
    from: '8CXVFF4C+W9',
    to: '9C2XRRWV+9X',
    via: ['9C2WP253+6R', '9C2WXJ2P+8Q', '9C2XRRPH+2H'],
  }, {
    date: '2012-09-12',
    from: '9C2XRRWV+9X',
    to: 'PDX',
    via: ['ZEP', 'LHR', 'ORD'],
  }, {
    date: '2012-09-19',
    from: 'PDX',
    to: 'GRU',
    via: ['ORD'],
  }, {
    date: '2012-09-28',
    from: 'GRU',
    to: '9C2XRRWV+9X',
    via: ['FRA', 'LHR', 'ZEP'],
  }, {
    date: '2012-11-14',
    from: '9C2XRRWV+9X',
    to: 'BFS',
    via: ['LGW'],
  }, {
    date: '2012-11-17',
    from: 'BFS',
    to: '9C2XRRWV+9X',
    via: ['LGW'],
  }, {
    date: '2013-04-09',
    from: '9C2XRRWV+9X',
    to: '9C3XFXHP+6P',
    via: ['9C3XGW38+P3'],
  }, {
    date: '2013-04-11',
    from: '9C3XFXHP+6P',
    to: 'SFO',
    via: ['9C3XGW38+P3', 'QQP', 'LHR'],
  }, {
    date: '2013-04-20',
    from: 'SFO',
    to: '9C2XRRWV+9X',
    via: ['LHR', 'QQP', 'ZEP'],
  }, {
    date: '2013-05-09',
    from: '9C2XRRWV+9X',
    to: '9C3RHXQX+FG',
    via: ['ZEP', 'QQP'],
  }, {
    date: '2013-05-11',
    from: '9C3RHXQX+FG',
    to: '9C3RFRGC+F9',
  }, {
    date: '2013-05-12',
    from: '9C3RFRGC+F9',
    to: '9C2XRVH5+GJ',
    via: ['QQP', 'ZEP'],
  }, {
    date: '2013-05-24',
    from: '9C2XRVH5+GJ',
    to: '9C4WH2M7+PQ',
    via: ['9C3XGRCP+XP', '9C4WF4H4+HX', 'QQN'],
  }, {
    date: '2013-05-27',
    from: '9C4WH2M7+PQ',
    to: '9C2XRVH5+GJ',
    via: ['QQN', '9C4WF4H4+HX', '9C3XGRCP+XP'],
  }, {
    date: '2013-05-31',
    from: '9C2XRVH5+GJ',
    to: '9C6VV3R8+7P',
    via: ['ZEP', 'QQU'],
  }, {
    date: '2013-06-02',
    from: '9C6VV3R8+7P',
    to: '9C2XRVH5+GJ',
    via: ['QQU', 'ZEP'],
  }, {
    date: '2013-07-16',
    from: '9C2XRVH5+GJ',
    to: '9C5W9GHP+8R',
    via: ['QQS'],
  }, {
    date: '2013-07-17',
    from: '9C5W9GHP+8R',
    to: 'QQY',
  }, {
    date: '2013-07-17',
    from: 'QQY',
    to: '9C2XRRWV+9X',
    via: ['9C4WWG8P+FM', 'QQS'],
  }, {
    date: '2013-07-26',
    from: '9C2XRRWV+9X',
    to: 'ZGG',
    via: ['ZEP', 'QQU'],
  }, {
    date: '2013-07-30',
    from: 'ZGG',
    to: '9C2XRRWV+9X',
    via: ['QQU', 'ZEP'],
  }, {
    date: '2013-08-16',
    from: '9C2XRRWV+9X',
    to: '9C2WJRMC+G2',
    via: ['9C2XV239+P9', '9C2WQVWR+VX', '9C2WQVWR+R7', '9C2WPRQQ+QQ', '9C2WPRQQ+MX'],
  }, {
    date: '2013-08-18',
    from: '9C2WJRMC+G2',
    to: '9C2XRVH5+GJ',
    via: ['9C2WPRQQ+MX', '9C2WPRQQ+QQ', '9C2WQVWR+R7', '9C2WQVWR+VX'],
  }, {
    date: '2013-08-22',
    from: '9C2XRVH5+GJ',
    to: 'ZYR',
    via: ['QQP'],
  }, {
    date: '2013-08-26',
    from: 'ZYR',
    to: '9C2XRVH5+GJ',
    via: ['QQP'],
  }, {
    date: '2013-09-19',
    from: '9C2XRVH5+GJ',
    to: '9C4X26MG+QF',
    via: ['9C3XFR8H+3M'],
  }, {
    date: '2013-09-20',
    from: '9C4X26MG+QF',
    to: '9C2XRVH5+GJ',
    via: ['9C3XFR8H+3M'],
  }, {
    date: '2013-09-20',
    from: '9C2XRVH5+GJ',
    to: '9C4WF4H4+HX',
    via: ['9C3XGRCP+XP'],
  }, {
    date: '2013-09-22',
    from: '9C4WF4H4+HX',
    to: '9C2XRVH5+GJ',
    via: ['9C3XGRCP+XP'],
  }, {
    date: '2013-10-07',
    from: 'LGW',
    to: 'EWR',
  }, {
    date: '2013-10-13',
    from: 'EWR',
    to: 'LGW',
  }, {
    date: '2014-03-08',
    from: '9C2XRVH5+GJ',
    to: 'ZGG',
    via: ['ZEP', 'QQU'],
  }, {
    date: '2014-03-09',
    from: 'ZGG',
    to: '9C2XRVH5+GJ',
    via: ['QQU', 'ZEP'],
  }, {
    date: '2014-06-07',
    from: '9C2XRVH5+GJ',
    to: 'ZGG',
    via: ['ZEP', 'QQU'],
  }, {
    date: '2014-06-09',
    from: '9C7QVP6X+XG',
    to: '9C8R4397+WR',
  }, {
    date: '2014-06-10',
    from: '9C8R4397+WR',
    to: '9C2XRVH5+GJ',
    via: ['9C7QVP6X+XG', 'ZGG', 'QQU', 'ZEP'],
  }, {
    date: '2014-06-27',
    from: '9C2XRVH5+GJ',
    to: 'ZGG',
    via: ['ZEP', 'QQU'],
  }, {
    date: '2014-06-29',
    from: 'ZGG',
    to: '9C2XRVH5+GJ',
    via: ['QQU', 'ZEP'],
  }, {
    date: '2014-11-12',
    from: '9C2XRVH5+GJ',
    to: 'BFS',
    via: ['9C3X5R4Q+MG', 'LGW'],
  }, {
    date: '2014-11-15',
    from: 'BFS',
    to: '9C2XRVH5+GJ',
    via: ['LGW', '9C3X5R4Q+MG'],
  }, {
    date: '2015-02-04',
    from: '9C2XRVH5+GJ',
    to: 'GRU',
    via: ['9C3X5R4Q+MG', 'LGW', 'LIS'],
  }, {
    date: '2015-02-22',
    from: 'GRU',
    to: 'SXF',
    via: ['LIS'],
  }, {
    date: '2015-02-26',
    from: 'QPP',
    to: '9C2XRVH5+GJ',
    via: ['QKL', 'ZYR', 'QQS'],
  }, {
    date: '2015-05-12',
    from: '9C2XRVH5+GJ',
    to: '9C3V9JHV+36',
  }, {
    date: '2015-05-13',
    from: '9C3V9JHV+36',
    to: '9C2XRVH5+GJ',
    via: ['QQP', 'ZEP'],
  }, {
    date: '2015-05-17',
    from: '9C2XRVH5+GJ',
    to: 'QQM',
    via: ['ZEP', 'QQU'],
  }, {
    date: '2015-05-20',
    from: 'QQM',
    to: '9C2XRVH5+GJ',
    via: ['QQU', 'ZEP'],
  }, {
    date: '2015-06-11',
    from: '9C2XRVH5+GJ',
    to: 'ZYA',
    via: ['QQS', 'ZYR'],
  }, {
    date: '2015-06-13',
    from: 'ZYA',
    to: 'QRH',
  }, {
    date: '2015-06-15',
    from: 'QRH',
    to: '9F3556X9+34',
    via: ['ZWE'],
  }, {
    date: '2015-06-17',
    from: '9F3556X9+34',
    to: '9C2XRVH5+GJ',
    via: ['ZYR', 'QQS'],
  }, {
    date: '2015-09-17',
    from: '9C2XRVH5+GJ',
    to: 'XYG',
    via: ['QQS', 'ZYR', 'QKL'],
  }, {
    date: '2015-09-21',
    from: 'XYG',
    to: '8FVXG32M+5H',
  }, {
    date: '2015-09-25',
    from: '8FVXG32M+5H',
    to: '8FW4R9VF+PQ',
    via: ['8FVC9GHR+44'],
  }, {
    date: '2015-09-27',
    from: '8FW4R9VF+PQ',
    to: '9C2XRVH5+GJ',
    via: ['XPG', 'QQS'],
  }, {
    date: '2015-10-21',
    from: '9C2XRVH5+GJ',
    to: 'QQN',
    via: ['QQU'],
  }, {
    date: '2015-10-23',
    from: 'QQN',
    to: '9C2XRVH5+GJ',
    via: ['QQU'],
  }, {
    date: '2016-01-22',
    from: '9C2XRVH5+GJ',
    to: 'QQY',
    via: ['ZEP', 'QQK'],
  }, {
    date: '2016-01-24',
    from: 'QQY',
    to: '9C2XRVH5+GJ',
    via: ['QQK', '9C3X4R9Q+68'],
  }, {
    date: '2016-03-17',
    from: '9C2XRVH5+GJ',
    to: 'BRS',
    via: ['ZEP', 'QQP'],
  }, {
    date: '2016-03-18',
    from: 'BRS',
    to: '9C3V9JHV+36',
  }, {
    date: '2016-03-18',
    from: '9C3V9JHV+36',
    to: 'BRS',
  }, {
    date: '2016-03-19',
    from: 'BRS',
    to: '9C2XRVH5+GJ',
    via: ['QQP', 'ZEP', '9C3X4R9Q+68'],
  }, {
    date: '2016-04-29',
    from: '9C2XRVH5+GJ',
    to: '9C4VJXGJ+4W',
    via: ['ZEP', '9C4WF4H4+HX', 'QQN'],
  }, {
    date: '2016-05-02',
    from: '9C4VJXGJ+4W',
    to: '9C2XRVH5+GJ',
    via: ['QQN', '9C4WF4H4+HX', '9C3XGW38+P3'],
  }, {
    date: '2016-06-15',
    from: '9C2XRVH5+GJ',
    to: '9F468WW9+M8',
    via: ['QQS', 'ZYR', 'ZYA'],
  }, {
    date: '2016-06-18',
    from: '9F468WW9+M8',
    to: '9F4734Q5+QX',
  }, {
    date: '2016-06-18',
    from: '9F4734Q5+QX',
    to: '9F468WW9+M8',
  }, {
    date: '2016-06-22',
    from: '9F468WW9+M8',
    to: '9C2XRVH5+GJ',
    via: ['ZYA', 'ZYR', 'QQS', 'ZEP'],
  }, {
    date: '2016-08-10',
    from: '9C2XRVH5+GJ',
    to: '9C4WWVW3+R7',
    via: ['ZEP', 'QQS'],
  }, {
    date: '2016-08-11',
    from: '9C4WWVW3+R7',
    to: '9C2XRVH5+GJ',
    via: ['QQS', 'ZEP'],
  }, {
    date: '2016-09-10',
    from: '9C2XRVH5+GJ',
    to: '8FV9XRWR+J5',
    via: ['QQS', 'XPG', '8FW4V9G5+PP', '8FW9HPPM+2Q'],
  }, {
    date: '2016-09-14',
    from: '8FV9XRWR+J5',
    to: 'ZDH',
  }, {
    date: '2016-09-16',
    from: 'ZDH',
    to: '8FW9HPPM+2Q',
  }, {
    date: '2016-09-19',
    from: '8FW9HPPM+2Q',
    to: '9C2XRVH5+GJ',
    via: ['XDB', 'QQS'],
  }, {
    date: '2017-05-10',
    from: '9C2XRVH5+GJ',
    to: '9C5M8RW3+2G',
    via: [
      'ZEP',
      'QQU',
      '9C5V54W9+JW',
      '9C5Q8959+3H',
      '9C5Q895C+PC',
    ],
  }, {
    date: '2017-05-11',
    from: '9C5M8PW4+G8',
    to: '9C5G7XF3+C5',
  }, {
    date: '2017-05-13',
    from: '9C5G7XF3+C5',
    to: '9C2XRVH5+GJ',
    via: [
      '9C5M8PW4+G8',
      '9C5M8RW3+2G',
      '9C5Q895C+PC',
      '9C5Q8959+3H',
      '9C5V54W9+JW',
      '9C5V3HQ8+RH',
      'QQU',
      'ZEP',
    ],
  }, {
    date: '2017-06-14',
    from: '9C2XRVH5+GJ',
    to: 'ZYA',
    via: ['QQS', 'ZYR'],
  }, {
    date: '2017-06-17',
    from: 'ZYA',
    to: '9F4638JG+68',
  }, {
    date: '2017-06-19',
    from: '9F4638JG+68',
    to: '9C2XRVH5+GJ',
    via: ['ZYA', 'ZYR', 'QQS'],
  }, {
    date: '2017-07-19',
    from: '9C2XRVH5+GJ',
    to: '8FX2F4VF+3W',
    via: [
      '9F22Q3Q4+V4',
      '9F22Q3R3+4V',
      '8FX3W3MQ+F6',
      '8FX3W3CJ+HC',
      '8FX3C3XV+GM',
    ],
  }, {
    date: '2017-07-22',
    from: '8FX2F4VF+3W',
    to: '8FX3C3XV+GM',
  }, {
    date: '2017-07-22',
    from: '8FX3C3XV+GM',
    to: '8FX2F4VF+3W',
  }, {
    date: '2017-07-24',
    from: '8FX2F4VF+3W',
    to: '9C2XRVH5+GJ',
    via: [
      '8FX3C3XV+GM',
      '8FX3W3CJ+HC',
      '8FX3W3MQ+F6',
      '9F22Q3R3+4V',
      '9F22Q3Q4+V4',
    ],
  }, {
    date: '2017-08-27',
    from: '9C2XRVH5+GJ',
    to: '9C2P4FC8+MX',
    via: ['ZEP', 'QQP', '9C2RPFH4+PH'],
  }, {
    date: '2017-08-29',
    from: '9C2P4FC8+MX',
    to: '9C2P6G5C+HR',
    via: ['9C2P5HC4+67'],
  }, {
    date: '2017-08-29',
    from: '9C2P6G5C+HR',
    to: '9C2P4FC8+MX',
    via: ['9C2P5HC4+67'],
  }, {
    date: '2017-08-30',
    from: '9C2P4FC8+MX',
    to: '9C2PCW8F+2P',
    via: ['9C2P7W7P+J8', '9C2Q974W+96'],
  }, {
    date: '2017-09-01',
    from: '9C2PCW8F+2P',
    to: '9C2XRVH5+GJ',
    via: ['9C2Q974W+96', '9C3XF25H+8C', '9C3X5R4Q+MG'],
  }, {
    date: '2017-11-04',
    from: '9C2XRVH5+GJ',
    to: 'QPP',
    via: ['ZEP', 'QQS', 'ZYR', 'QKL'],
  }, {
    date: '2017-11-09',
    from: 'QPP',
    to: '9C2XRVH5+GJ',
    via: ['QKL', 'XHN', 'ZYR', 'XDB', 'QQS'],
  }, {
    date: '2018-01-03',
    from: 'LHR',
    to: 'GRU',
  }, {
    date: '2018-01-14',
    from: 'GRU',
    to: 'LHR',
  }, {
    date: '2018-02-07',
    from: '9C2XRVH5+GJ',
    to: 'ZGG',
    via: ['ZEP', 'QQU'],
  }, {
    date: '2018-02-08',
    from: '9C7QVP6X+XG',
    to: '9C8PCG7G+2C',
  }, {
    date: '2018-02-10',
    from: '9C8PCG6F+VH',
    to: '9C8PF7CV+7F',
  }, {
    date: '2018-02-10',
    from: '9C8PF7CV+7F',
    to: '9C8PCG6F+VH',
  }, {
    date: '2018-02-12',
    from: '9C8PCG7G+2C',
    to: '9C2XRVH5+GJ',
    via: ['9C7QVP6X+XG', 'ZGG', 'QQU', 'ZEP'],
  }, {
    date: '2018-02-17',
    from: '9C2XRVH5+GJ',
    to: '9F43J8G4+QJ',
    via: ['ZEP', 'QQK', 'CBG'],
  }, {
    date: '2018-02-18',
    from: '9F43J8G4+QJ',
    to: '9C2XRVH5+GJ',
    via: ['CBG', 'QQK', 'ZEP'],
  }, {
    date: '2018-04-05',
    from: '9C2XRVH5+GJ',
    to: '9C4WJVJF+FW',
    via: ['ZEP', 'QQS'],
  }, {
    date: '2018-04-06',
    from: '9C4WJVJF+FW',
    to: '9C2XRVH5+GJ',
    via: ['QQS'],
  }, {
    date: '2018-05-15',
    from: '9C2XRVH5+GJ',
    to: '9C2RPFH4+PH',
    via: ['ZEP', 'QQP'],
  }, {
    date: '2018-05-17',
    from: '9C2RPFH4+PH',
    to: '9C2P5GWP+R9',
    via: ['9C2P5HC4+67'],
  }, {
    date: '2018-05-20',
    from: '9C2P5GWP+R9',
    to: '9C2XRVH5+GJ',
    via: ['9C2P5HC4+67', '9C3XF25H+8C', '9C3XFR8H+3M', '9C2XRRPH+2H'],
  }, {
    date: '2018-06-04',
    from: '9C2WVHVX+CX',
    to: '9C2WVHVX+CX',
    via: [
      '9FF7C764+CW',
      '9FG9V479+FH',
      '9FJ8F592+RV',
      '9FJ9HM9V+2P',
      '9FMGC9QW+8R',
      '9FJ83VPF+6H',
      '9FJ94623+VW',
      '9FH8RRV6+37',
      '9FC7XPFH+2W',
    ],
  }, {
    date: '2018-08-03',
    from: '9C2XRVH5+GJ',
    to: '9C4WH2M7+PQ',
    via: ['ZEP', 'QQU', 'QQN'],
  }, {
    date: '2018-08-04',
    from: '9C4WH2M7+PQ',
    to: '9C5VM93F+26',
    via: ['QQN', '9C5VQ74V+44'],
  }, {
    date: '2018-08-05',
    from: '9C5VM93F+26',
    to: 'NCL',
    via: ['9C5VFQQ5+24', 'QQY'],
  }, {
    date: '2018-08-07',
    from: 'NCL',
    to: 'ZXE',
  }, {
    date: '2018-08-10',
    from: 'ZXE',
    to: '9C2XRVH5+GJ',
    via: ['QQK', 'ZEP'],
  }, {
    date: '2018-09-21',
    from: '9C2XRVH5+GJ',
    to: 'QPP',
    via: ['ZEP', 'QQS', 'ZYR', 'QKL'],
  }, {
    date: '2018-10-04',
    from: 'QPP',
    to: 'XFP',
    via: ['ZMB', '9F6HG62G+9F', '9F6HG63H+4F', '9F6HM932+VH', '9F6HM943+3W', 'ZGH'],
  }, {
    date: '2018-10-07',
    from: 'XFP',
    to: 'ZMB',
    via: ['ZGH', '9F7FHP9R+75'],
  }, {
    date: '2018-10-10',
    from: 'ZMB',
    to: '9C2XRVH5+GJ',
    via: ['QKL', 'ZYR', 'QQS'],
  }, {
    date: '2018-11-15',
    from: '9C2XRVH5+GJ',
    to: 'KEF',
    via: ['9C3X5R4Q+MG', 'LGW'],
  }, {
    date: '2018-11-20',
    from: 'KEF',
    to: '9C2XRVH5+GJ',
    via: ['LGW', '9C3X5R4Q+MG'],
  }, {
    date: '2019-04-12',
    from: '9C2XRVH5+GJ',
    via: ['ZEP'],
    to: '9F3399PC+5W',
  }, {
    date: '2019-04-14',
    from: '9F3399PC+5W',
    to: '9C2XRVH5+GJ',
    via: ['QDH', '9F22VH5G+5P', '9F22V2C6+6H'],
  }, {
    date: '2019-06-09',
    from: '9C2XRVH5+GJ',
    to: '9F27RPX4+V4',
    via: ['QQS', 'ZYR', 'XHN'],
  }, {
    date: '2019-06-12',
    from: '9F27RPX4+V4',
    to: 'ZYA',
  }, {
    date: '2019-06-16',
    from: 'ZYA',
    to: '9C2XRVH5+GJ',
    via: ['ZYR', 'QQS'],
  }, {
    date: '2019-09-01',
    from: '9C2XRVH5+GJ',
    to: '8CCGQW92+47',
    via: ['QQS', 'XPG', 'XGB', '8CMW9639+67'],
  }, {
    date: '2019-09-08',
    from: '8CCGQW92+47',
    to: '9C2XRVH5+GJ',
    via: ['8CMW9639+67', 'XGB', 'XPG', 'QQS'],
  }, {
    date: '2020-01-24',
    from: '9C2XRVH5+GJ',
    to: 'ZMB',
    via: ['9C2XR9J5+9X', 'QQS', 'ZYR', 'QKL'],
  }, {
    date: '2020-01-25',
    from: 'ZMB',
    to: 'ZGH',
  }, {
    date: '2020-01-28',
    from: 'ZGH',
    to: 'XEV',
    via: ['9F8M5Q57+47'],
  }, {
    date: '2020-02-01',
    from: 'XEV',
    to: 'XZO',
    via: ['XWL'],
  }, {
    date: '2020-02-05',
    from: 'XZO',
    to: 'ZGH',
    via: ['XWL'],
  }, {
    date: '2020-02-06',
    from: 'ZGH',
    to: 'QKL',
    via: ['ZMB'],
  }, {
    date: '2020-02-08',
    from: 'QKL',
    to: '9C2XRVH5+GJ',
    via: ['ZYR', 'QQS'],
  }, {
    date: '2021-06-15',
    from: '9C2XRVH5+GJ',
    to: '9C2P7W7P+J8',
    via: ['ZEP', 'QQP'],
  }, {
    date: '2021-06-18',
    from: '9C2P7W7P+J8',
    to: '9C2XRVH5+GJ',
    via: ['QQP', 'ZEP'],
  }, {
    date: '2021-10-22',
    from: '9C2XRVH5+GJ',
    to: 'LPL',
    via: ['QQS', 'QQU'],
  }, {
    date: '2021-10-24',
    from: 'LPL',
    to: '9C2XRVH5+GJ',
    via: ['QQU', 'QQS'],
  }, {
    date: '2022-04-11',
    from: '9C2XRVH5+GJ',
    to: '9C9V4WV2+FF',
    via: ['ZEP', 'QQU'],
  }, {
    date: '2022-04-14',
    from: '9C9V4WV2+FF',
    to: '9C8VF25J+36',
  }, {
    date: '2022-04-16',
    from: '9C8VF25J+36',
    to: '9C2XRVH5+GJ',
    via: ['QQK', 'QQS'],
  }, {
    date: '2022-05-25',
    from: '9C2XRVH5+GJ',
    to: '8FM9P736+PQ',
    via: ['QQS', 'XPG', '8FW4R9VF+PQ'],
  }, {
    date: '2022-05-30',
    from: '8FM9P736+PQ',
    to: '9C2XRVH5+GJ',
    via: ['8FW4R9VF+PQ', 'XPG', 'QQS'],
  }, {
    date: '2022-08-22',
    from: '9C2XRVH5+GJ',
    to: 'XPG',
    via: ['QQS'],
  }, {
    date: '2022-08-23',
    from: 'XGB',
    to: '8CMW8279+78',
    via: ['8CMW9639+67'],
  }, {
    date: '2022-08-26',
    from: '8CMW828F+F2',
    to: '8CJH67PQ+4J',
    via: ['8CGRF8C8+QX'],
  }, {
    date: '2022-08-27',
    from: '8CJH67QQ+P5',
    to: '8CHH4CX7+GR'
  }, {
    date: '2022-09-04',
    from: '8CHH4CX7+GR',
    to: '8CJH67QQ+P5'
  }, {
    date: '2022-09-05',
    from: '8CJH67PQ+4J',
    to: '8CGRF8C8+QX'
  }, {
    date: '2022-09-07',
    from: '8CGRC846+2M',
    to: '8FW4R9VF+PQ',
    via: ['8FH494HQ+HX'],
  }, {
    date: '2022-09-08',
    from: 'XPG',
    to: '9C2XRVH5+GJ',
    via: ['QQS']
  }];

  // Trip mode types
  const types = {
    airport: {
      color: '#c30',
      emissions: 0.158,
    },
    port: {
      color: '#939',
      emissions: 0.4,
    },
    station: {
      color: '#f63',
      emissions: 0.032,
    },
  };

  // Add trips metadata
  trips = trips.map((trip, index) => {
    let distance = 0;
    trip.stops = [];
    trip.geojson = {
      type: 'FeatureCollection',
      features: [],
    };

    // Trip stops
    const {from} = trip;
    const {to} = trip;
    const via = trip.via || [];
    const stopsData = [from, ...via, to];

    for (const [index, stop] of stopsData.entries()) {
      const thisStop = getPlace(stop);
      let nextStop = stopsData[index + 1];
      if (nextStop) {
        nextStop = getPlace(nextStop);
        const legDistance = getDistance(thisStop.geo, nextStop.geo);
        distance += legDistance;

        const feature = {
          type: 'Feature',
          properties: {
            stroke: types[thisStop.type].color.replace('#', '%23'),
            'stroke-opacity': 0.75,
            'stroke-width': 4,
          },
          geometry: {
            type: 'LineString',
            coordinates: [
              [thisStop.geo.longitude, thisStop.geo.latitude],
              [nextStop.geo.longitude, nextStop.geo.latitude],
            ],
          },
        };

        trip.geojson.features.push(feature);
      }

      trip.stops.push(thisStop);
    }

    // Trip ID
    const dateObject = new Date(trip.date);
    const dateBase60 = newbase60.DateToSxg(dateObject); // eslint-disable-line new-cap

    let tripCount = 1;
    const previousItem = (trips[index - 1]);
    if (previousItem && previousItem.date === trip.date) {
      tripCount++;
    }

    // Trip to/from addresses
    const fromPlace = getPlace(from);
    const fromAddress = `${fromPlace.address.locality}, ${fromPlace.address['country-name']}`;
    const toPlace = getPlace(to);
    const toAddress = `${toPlace.address.locality}, ${toPlace.address['country-name']}`;

    // Distance travelled and CO₂ emitted
    const km = Math.ceil(distance / 1000);
    const kg = Math.ceil(km * types[toPlace.type].emissions);

    // Trip metadata
    trip.id = `${dateBase60}${tripCount}`;
    trip.title = `${fromAddress} ➔ ${toAddress}`;
    trip.summary = `A trip of ${km} km that emitted roughly ${kg} kg of CO₂.`;
    trip.distance = km;
    trip.co2 = kg;

    return trip;
  });

  return trips;
};

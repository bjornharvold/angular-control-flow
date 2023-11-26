/*
 * Copyright (c) wink.travel 2023
 */

import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  DifferenceInSecondsPipeModule,
  DifferenceInMinutesPipeModule,
  DifferenceInHoursPipeModule,
  DifferenceInDaysPipeModule,
  DifferenceInWeeksPipeModule,
  DifferenceInMonthsPipeModule,
  DifferenceInYearsPipeModule,
  ParseIsoPipeModule,
  IsEqualPipeModule,
} from 'ngx-date-fns';
import { NgIf } from '@angular/common';
import { formatISO } from 'date-fns';

const SECONDS_IN_YEAR = 31536000;
const SECONDS_IN_MONTH = 2628288;
const SECONDS_IN_WEEK = 604800;
const SECONDS_IN_DAY = 86400;
const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;
const DAYS_IN_YEAR = 365;
const DAYS_IN_MONTH = 30;
const DAYS_IN_WEEK = 7;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    DifferenceInSecondsPipeModule,
    DifferenceInMinutesPipeModule,
    DifferenceInHoursPipeModule,
    DifferenceInDaysPipeModule,
    DifferenceInWeeksPipeModule,
    DifferenceInMonthsPipeModule,
    DifferenceInYearsPipeModule,
    ParseIsoPipeModule,
    IsEqualPipeModule,
  ],
})
export class AppComponent implements OnInit {
  @Input() isoDateTime?: string = formatISO(new Date(2019, 8, 18, 19, 0, 52));
  @Input() isoDate?: string;
  @Input() now = new Date();
  secondsInYear = SECONDS_IN_YEAR;
  secondsInMonth = SECONDS_IN_MONTH;
  secondsInWeek = SECONDS_IN_WEEK;
  secondsInDay = SECONDS_IN_DAY;
  secondsInHour = SECONDS_IN_HOUR;
  secondsInMinute = SECONDS_IN_MINUTE;
  daysInYear = DAYS_IN_YEAR;
  daysInMonth = DAYS_IN_MONTH;
  daysInWeek = DAYS_IN_WEEK;

  constructor() {}

  ngOnInit() {}
}

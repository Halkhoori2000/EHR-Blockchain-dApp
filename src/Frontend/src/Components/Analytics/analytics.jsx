import React, { Fragment, useContext } from 'react'
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../AbstractElements';
import GoogleContext from '../../_helper/GoogleChart';
import BarChartClass from '../Charts/ApexCharts/BarChart';
import PieChartClass from '../Charts/ApexCharts/PieChart';
import { PieChart, BarChart2 } from '../../Constant';
import DummyBarChart from './Charts Folder/PieChart2';
import UserInterestedChart from './Charts Folder/interestesChart';

export const Analytics = () => {
  const chartData = useContext(GoogleContext);
  return (
    <Fragment>
      <Breadcrumbs parent="Analytics" title="Check Analytics" mainTitle="Analytics" />
        <Container fluid={ true }>
          <Row>
          <BarChartClass />
          <PieChartClass data={chartData.googleChart.GooglePieChart1} title={PieChart} digit={"1"} />
          </Row>
          <Row>
          <DummyBarChart data={ chartData.googleChart.GoogleBarChart2 } title={ BarChart2 } />
          <UserInterestedChart data={chartData.googleChart.GoogleMaterialDesignChart} title={"Interestes Ratio"}/>
          </Row>
        </Container>
    </Fragment>
  )
}


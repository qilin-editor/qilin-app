import React, { Component } from "react";
import ReactTransitionGroup from "react-addons-css-transition-group";

import AlertInfo            from "./AlertsInfo.react";
import AlertFailure         from "./AlertsFailure.react";
import AlertSuccess         from "./AlertsSuccess.react";

import AlertsStore          from "../../stores/AlertStore";

export default class Alerts extends Component {
    state = {
        info    : AlertsStore.info,
        failure : AlertsStore.failure,
        success : AlertsStore.success
    }

    componentDidMount() {
        AlertsStore.addChangeListener( () => this.onAlertsChange() );
    }

    componentWillUnmount() {
        AlertsStore.removeChangeListener( this.onAlertsChange );
    }

    onAlertsChange() {
        console.log( AlertsStore.success );

        this.setState( {
            info    : AlertsStore.info,
            failure : AlertsStore.failure,
            success : AlertsStore.success
        } );
    }

    renderInfo() {
        return this.state.info.map( ( alert, key ) => (
            <AlertInfo key={key} index={key} title="Info alert" message={alert.message} />
        ) );
    }

    renderFailure() {
        return this.state.failure.map( ( alert, key ) => (
            <AlertFailure key={key} index={key} title="Failure alert" message={alert.message} />
        ) );
    }

    renderSuccess() {
        return this.state.success.map( ( alert, key ) => (
            <AlertSuccess key={key} index={key} title="Success alert" message={alert.message} />
        ) );
    }

    render() {
        return (
            <ReactTransitionGroup
                className="alerts qilin-panel"
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
                {this.renderInfo()}
                {this.renderFailure()}
                {this.renderSuccess()}
            </ReactTransitionGroup>
        );
    }
}

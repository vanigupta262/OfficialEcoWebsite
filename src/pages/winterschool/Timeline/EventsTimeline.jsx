import { data, map } from "jquery";
import React, { Fragment } from "react";
import { render } from "react-dom";
import { Timeline, Event } from "react-timeline-scribble";

class EventData{
    constructor(day, title, description){
        this.data = {'day':day, 'title':title, "description":description}
    }
}
export default class EventsTimeline extends React.Component {

    // Add new events to the following arrays.
    week1 = [
        new EventData("Monday", "Abstractify Day 1", "Case Study Prompt to be Released"),
        new EventData("Tuesday","Keynote Session", "Financial Markets: The Backbone of Economy"),
        new EventData("Thursday","Lecture: 1", "3 Key Elements for a successful Trading Strategy"),
        new EventData("Friday","Lecture: 2", "Behavioral Decision Making in Trading"),
        new EventData("Saturday","Auctionomics Day 1", "Auction Eventinvolving differentstyles and types of bidding"),
        new EventData("Sunday","Auctionomics Day 2", "Auction Eventinvolving differentstyles and types of bidding"),
    ]
    week2 = [
        new EventData("Tuesday", "Lecture: 3", "Tech and Trading: Past Present and Future"),
        new EventData("Thursday", "Lecture: 4", "Life at Optiverand applying for an internship"),
        new EventData("Staurday", "Abstractify: Finals", "Case presentation round"),
        new EventData("Sunday", "Dalal Street", "Stock Market Simulation Competition"),
    ]
    //end

    render() {
        return (
            <Fragment>
                <div className="card p-3 shadow bg-body rounded">
                    <p className="display-4 card-title">Week 1</p>

                    <Timeline>
                        {map(this.week1, this.RenderEvent)}
                    </Timeline>
                </div>

                <div className="card p-3 mt-3 shadow bg-body rounded">
                    <p className="display-4">Week 2</p>
                    <Timeline>
                        {map(this.week2, this.RenderEvent)}
                    </Timeline>
                </div>

            </Fragment>
        );
    }

    Heading(title, subtitle){
        return(
            <>
                <h1>{title}</h1>
                <h3 className="mb-4">{subtitle}</h3>
            </>
        )
    }

    RenderEvent(event){
        data = event.data;
        return(
            <Event interval={data['day']} title={data['title']}>
                {/* <h2 className="display-4">{data['title']}</h2>   */}
               {data['description']}
               <div style={{width:"75vw"}}></div>
            </Event>
        );
    }
}


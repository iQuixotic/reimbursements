import * as React from "react";

interface IProps {
    children: any,
    fullSize?: any,
    lowerLimit?: number,
    mobileSize?: any,
    upperLimit?: number,
}

interface IState {
    isMobile: boolean,
    lowerLimit?: boolean,
    screenSize: number,
    upperLimit?: boolean,
}


// renderless component to decide which components to render 
class MediaQuery extends React.Component<IProps, IState> {
        public constructor(props: IProps) {
            super(props);
            this.state = {
                isMobile: false,
                lowerLimit: false,
                screenSize: window.innerWidth,                   
                upperLimit: false,           
            };
            this.updatePredicate = this.updatePredicate.bind(this);
        }
        public componentDidMount() {
            this.updatePredicate();
            window.addEventListener("resize", this.updatePredicate);
        }

        public componentWillUnmount() {
            window.removeEventListener("resize", this.updatePredicate);
        }

        public updatePredicate() {
            const ww = window.innerWidth;
            this.setState({
                lowerLimit: this.props.lowerLimit !== undefined ? this.props.lowerLimit > ww : false,
                screenSize: ww,
                upperLimit: this.props.upperLimit !== undefined ? this.props.upperLimit < ww : false,
            });
        }

        public render() {
            return (
                // if not at the upper or lower bounds of the query, render children
                !this.state.lowerLimit && !this.state.upperLimit ?
                this.props.children :
                null
            )              
        }
    }


export default MediaQuery;
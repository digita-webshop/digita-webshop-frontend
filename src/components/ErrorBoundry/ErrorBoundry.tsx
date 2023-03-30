import React, { ErrorInfo } from "react";
import ErrorPage from "./ErrorPage";

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }
    //@ts-ignore
    return this.props.children;
  }
}

export default ErrorBoundary;

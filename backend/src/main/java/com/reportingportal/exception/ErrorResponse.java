package com.reportingportal.exception;

import java.time.Instant;

// The JSON body every error response returns, regardless of which exception
// triggered it - gives the frontend one consistent error shape to handle.
public record ErrorResponse(
        Instant timestamp,
        int status,
        String error,
        String message,
        String path
) {
}

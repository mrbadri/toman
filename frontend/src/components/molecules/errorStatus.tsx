"use client";

import { Button } from "@/components/atoms/button";
import { Card, CardContent } from "@/components/atoms/card";
import { AlertCircle, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

interface ErrorStatusProps {
  onRetry: () => void;
  isRetrying: boolean;
  errorMessage?: string;
}

export const ErrorStaus = ({
  onRetry,
  isRetrying,
  errorMessage = "An error occurred while fetching payment details. Please try again.",
}: ErrorStatusProps) => {
  return (
    <div className="container mx-auto  h-full flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex items-center justify-center min-h-[50vh]"
      >
        <Card
          className="w-full max-w-md border-destructive/50 bg-destructive/5 
                     dark:bg-destructive/10 shadow-lg overflow-hidden 
                     transition-all duration-300 hover:shadow-xl py-0"
        >
          <div className="relative">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-destructive/5 dark:to-destructive/10" />

            <CardContent className="p-6 sm:p-8">
              {/* Error Icon and Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-destructive/10 dark:bg-destructive/20 rounded-full">
                  <AlertCircle className="h-6 w-6 text-destructive animate-pulse" />
                </div>
                <h2
                  className="text-xl sm:text-2xl font-bold text-destructive 
                             dark:text-destructive tracking-tight"
                >
                  Oops! Something Went Wrong
                </h2>
              </div>

              {/* Error Message */}
              <p
                className="text-sm sm:text-base text-muted-foreground 
                          dark:text-muted-foreground mb-6 leading-relaxed"
              >
                {errorMessage}
              </p>

              {/* Retry Button */}
              <Button
                variant="outline"
                size="lg"
                className="w-full group relative overflow-hidden
                          border-destructive text-destructive 
                          hover:bg-destructive/10 dark:hover:bg-destructive/20
                          transition-all duration-300 disabled:opacity-70
                          disabled:cursor-not-allowed"
                onClick={onRetry}
                disabled={isRetrying}
              >
                <span
                  className="absolute inset-0 bg-destructive/10 
                               scale-x-0 group-hover:scale-x-100 
                               transition-transform duration-300 
                               origin-left dark:bg-destructive/20"
                />
                <span className="relative flex items-center justify-center gap-2">
                  {isRetrying ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      Retrying...
                    </>
                  ) : (
                    <>
                      <RefreshCw
                        className="h-4 w-4 group-hover:rotate-180 
                                          transition-transform duration-300"
                      />
                      Try Again
                    </>
                  )}
                </span>
              </Button>
            </CardContent>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

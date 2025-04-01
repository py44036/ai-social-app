#!/bin/bash

# Existing Process को ढूंढें और Kill करें
PIDS=$(lsof -ti :5500)
if [ ! -z "$PIDS" ]; then
    echo "Killing existing process on port 5500 (PID: $PIDS)..."
    kill -9 $PIDS
    sleep 2
fi

# Frontend को Restart करें
echo "Restarting ai-social-frontend..."
pm2 restart ai-social-frontend
echo "✅ Frontend restarted successfully!"
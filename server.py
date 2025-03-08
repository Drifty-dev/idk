from flask import Flask, jsonify, request
import socket

app = Flask(__name__)

connected_ips = set()

@app.route('/ips', methods=['GET'])
def get_ips():
    return jsonify(list(connected_ips))

@app.route('/connect', methods=['POST'])
def connect():
    ip = request.remote_addr
    connected_ips.add(ip)
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)

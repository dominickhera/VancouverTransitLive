export default `
.bus:before {
  content: ' ';
  display: inline-block;
  width: 8px;
  height: 8px;
  background: red;
  border-radius: 8px;
  margin: 0 8px;
}
.bus {
  border-radius: 20px;
  padding-right: 12px;
  margin: -12px;
  color: transparent;
  line-height: 24px;
  font-size: 13px;
  white-space: nowrap;
}
.bus span {
  display: none;
}
.bus:hover {
  background: rgba(0,0,0,0.8);
  color: #fff;
}
.bus:hover span {
  display: inline-block;
}
`;
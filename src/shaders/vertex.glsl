void main(){
    vuv = uv;
    // gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_pointSize = 50. * ( 1. / - mvPosition.z );
    gl_Position = projectionMatrix * mvPosition;
}
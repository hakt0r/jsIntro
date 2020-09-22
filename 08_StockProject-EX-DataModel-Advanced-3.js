
class Ball {}
class Field {}
class Score {}
class Human {}

class Stadium {
    teamA    = Team
    teamB    = Team
    audience = [Spectator]
    referee  = [Referee]
    field    = Field
    ball     = Ball
    score    = Score
}

class Team {
    offense    = [Offense]
    midfield   = [Midfield]
    defense    = [Defense]
    goalkeeper = Goalkeeper
    reserve    = [Player]
    captain    = Player 
    coaches    = [Coach]
}

class Players    extends Human  {}

class Goalkeeper extends Player {}
class Offense    extends Player {}
class Defense    extends Player {}
class Midfield   extends Player {}

class Coach      extends Human  {}

class Referee    extends Human  {}

class Spectator  extends Human  {}
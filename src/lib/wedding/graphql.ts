/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  jsonb: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Holds the answers for questions from users */
export type Answers = {
  created_at: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  option_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  question: Questions;
  question_id: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int']['output'];
};

/** aggregated selection of "answers" */
export type Answers_Aggregate = {
  aggregate?: Maybe<Answers_Aggregate_Fields>;
  nodes: Array<Answers>;
};

export type Answers_Aggregate_Bool_Exp = {
  count?: InputMaybe<Answers_Aggregate_Bool_Exp_Count>;
};

export type Answers_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Answers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Answers_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "answers" */
export type Answers_Aggregate_Fields = {
  avg?: Maybe<Answers_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Answers_Max_Fields>;
  min?: Maybe<Answers_Min_Fields>;
  stddev?: Maybe<Answers_Stddev_Fields>;
  stddev_pop?: Maybe<Answers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Answers_Stddev_Samp_Fields>;
  sum?: Maybe<Answers_Sum_Fields>;
  var_pop?: Maybe<Answers_Var_Pop_Fields>;
  var_samp?: Maybe<Answers_Var_Samp_Fields>;
  variance?: Maybe<Answers_Variance_Fields>;
};


/** aggregate fields of "answers" */
export type Answers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Answers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "answers" */
export type Answers_Aggregate_Order_By = {
  avg?: InputMaybe<Answers_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Answers_Max_Order_By>;
  min?: InputMaybe<Answers_Min_Order_By>;
  stddev?: InputMaybe<Answers_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Answers_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Answers_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Answers_Sum_Order_By>;
  var_pop?: InputMaybe<Answers_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Answers_Var_Samp_Order_By>;
  variance?: InputMaybe<Answers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "answers" */
export type Answers_Arr_Rel_Insert_Input = {
  data: Array<Answers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Answers_On_Conflict>;
};

/** aggregate avg on columns */
export type Answers_Avg_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  option_id?: Maybe<Scalars['Float']['output']>;
  question_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "answers" */
export type Answers_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "answers". All fields are combined with a logical 'AND'. */
export type Answers_Bool_Exp = {
  _and?: InputMaybe<Array<Answers_Bool_Exp>>;
  _not?: InputMaybe<Answers_Bool_Exp>;
  _or?: InputMaybe<Array<Answers_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  option_id?: InputMaybe<Int_Comparison_Exp>;
  question?: InputMaybe<Questions_Bool_Exp>;
  question_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "answers" */
export type Answers_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'answers_pkey';

/** input type for incrementing numeric columns in table "answers" */
export type Answers_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  option_id?: InputMaybe<Scalars['Int']['input']>;
  question_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "answers" */
export type Answers_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  option_id?: InputMaybe<Scalars['Int']['input']>;
  question?: InputMaybe<Questions_Obj_Rel_Insert_Input>;
  question_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Answers_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  option_id?: Maybe<Scalars['Int']['output']>;
  question_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "answers" */
export type Answers_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Answers_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  option_id?: Maybe<Scalars['Int']['output']>;
  question_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "answers" */
export type Answers_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "answers" */
export type Answers_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Answers>;
};

/** on_conflict condition type for table "answers" */
export type Answers_On_Conflict = {
  constraint: Answers_Constraint;
  update_columns?: Array<Answers_Update_Column>;
  where?: InputMaybe<Answers_Bool_Exp>;
};

/** Ordering options when selecting data from "answers". */
export type Answers_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  question?: InputMaybe<Questions_Order_By>;
  question_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: answers */
export type Answers_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "answers" */
export type Answers_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'option_id'
  /** column name */
  | 'question_id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

/** input type for updating data in table "answers" */
export type Answers_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  option_id?: InputMaybe<Scalars['Int']['input']>;
  question_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Answers_Stddev_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  option_id?: Maybe<Scalars['Float']['output']>;
  question_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "answers" */
export type Answers_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Answers_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  option_id?: Maybe<Scalars['Float']['output']>;
  question_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "answers" */
export type Answers_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Answers_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  option_id?: Maybe<Scalars['Float']['output']>;
  question_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "answers" */
export type Answers_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "answers" */
export type Answers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Answers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Answers_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  option_id?: InputMaybe<Scalars['Int']['input']>;
  question_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Answers_Sum_Fields = {
  id?: Maybe<Scalars['Int']['output']>;
  option_id?: Maybe<Scalars['Int']['output']>;
  question_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "answers" */
export type Answers_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "answers" */
export type Answers_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'option_id'
  /** column name */
  | 'question_id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

export type Answers_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Answers_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Answers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Answers_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Answers_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  option_id?: Maybe<Scalars['Float']['output']>;
  question_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "answers" */
export type Answers_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Answers_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  option_id?: Maybe<Scalars['Float']['output']>;
  question_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "answers" */
export type Answers_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Answers_Variance_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  option_id?: Maybe<Scalars['Float']['output']>;
  question_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "answers" */
export type Answers_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  option_id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** Holds info about the events (wedding, anniversary, etc.) */
export type Events = {
  created_at: Scalars['timestamptz']['output'];
  datetime?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  guests: Array<Guests>;
  /** An aggregate relationship */
  guests_aggregate: Guests_Aggregate;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** An array relationship */
  owners: Array<Events_Owners>;
  /** An aggregate relationship */
  owners_aggregate: Events_Owners_Aggregate;
  /** An array relationship */
  questionnaires: Array<Questionnaire>;
  /** An aggregate relationship */
  questionnaires_aggregate: Questionnaire_Aggregate;
  type: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** Holds info about the events (wedding, anniversary, etc.) */
export type EventsGuestsArgs = {
  distinct_on?: InputMaybe<Array<Guests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Guests_Order_By>>;
  where?: InputMaybe<Guests_Bool_Exp>;
};


/** Holds info about the events (wedding, anniversary, etc.) */
export type EventsGuests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Guests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Guests_Order_By>>;
  where?: InputMaybe<Guests_Bool_Exp>;
};


/** Holds info about the events (wedding, anniversary, etc.) */
export type EventsOwnersArgs = {
  distinct_on?: InputMaybe<Array<Events_Owners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Owners_Order_By>>;
  where?: InputMaybe<Events_Owners_Bool_Exp>;
};


/** Holds info about the events (wedding, anniversary, etc.) */
export type EventsOwners_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Owners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Owners_Order_By>>;
  where?: InputMaybe<Events_Owners_Bool_Exp>;
};


/** Holds info about the events (wedding, anniversary, etc.) */
export type EventsQuestionnairesArgs = {
  distinct_on?: InputMaybe<Array<Questionnaire_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questionnaire_Order_By>>;
  where?: InputMaybe<Questionnaire_Bool_Exp>;
};


/** Holds info about the events (wedding, anniversary, etc.) */
export type EventsQuestionnaires_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questionnaire_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questionnaire_Order_By>>;
  where?: InputMaybe<Questionnaire_Bool_Exp>;
};

/** aggregated selection of "events" */
export type Events_Aggregate = {
  aggregate?: Maybe<Events_Aggregate_Fields>;
  nodes: Array<Events>;
};

/** aggregate fields of "events" */
export type Events_Aggregate_Fields = {
  avg?: Maybe<Events_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Events_Max_Fields>;
  min?: Maybe<Events_Min_Fields>;
  stddev?: Maybe<Events_Stddev_Fields>;
  stddev_pop?: Maybe<Events_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Events_Stddev_Samp_Fields>;
  sum?: Maybe<Events_Sum_Fields>;
  var_pop?: Maybe<Events_Var_Pop_Fields>;
  var_samp?: Maybe<Events_Var_Samp_Fields>;
  variance?: Maybe<Events_Variance_Fields>;
};


/** aggregate fields of "events" */
export type Events_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Events_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Events_Avg_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "events". All fields are combined with a logical 'AND'. */
export type Events_Bool_Exp = {
  _and?: InputMaybe<Array<Events_Bool_Exp>>;
  _not?: InputMaybe<Events_Bool_Exp>;
  _or?: InputMaybe<Array<Events_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  datetime?: InputMaybe<Timestamp_Comparison_Exp>;
  guests?: InputMaybe<Guests_Bool_Exp>;
  guests_aggregate?: InputMaybe<Guests_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  owners?: InputMaybe<Events_Owners_Bool_Exp>;
  owners_aggregate?: InputMaybe<Events_Owners_Aggregate_Bool_Exp>;
  questionnaires?: InputMaybe<Questionnaire_Bool_Exp>;
  questionnaires_aggregate?: InputMaybe<Questionnaire_Aggregate_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "events" */
export type Events_Constraint =
  /** unique or primary key constraint on columns "name" */
  | 'events_name_key'
  /** unique or primary key constraint on columns "id" */
  | 'events_pkey';

/** input type for incrementing numeric columns in table "events" */
export type Events_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "events" */
export type Events_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  datetime?: InputMaybe<Scalars['timestamp']['input']>;
  guests?: InputMaybe<Guests_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owners?: InputMaybe<Events_Owners_Arr_Rel_Insert_Input>;
  questionnaires?: InputMaybe<Questionnaire_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Events_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  datetime?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Events_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  datetime?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "events" */
export type Events_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Events>;
};

/** input type for inserting object relation for remote table "events" */
export type Events_Obj_Rel_Insert_Input = {
  data: Events_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Events_On_Conflict>;
};

/** on_conflict condition type for table "events" */
export type Events_On_Conflict = {
  constraint: Events_Constraint;
  update_columns?: Array<Events_Update_Column>;
  where?: InputMaybe<Events_Bool_Exp>;
};

/** Ordering options when selecting data from "events". */
export type Events_Order_By = {
  created_at?: InputMaybe<Order_By>;
  datetime?: InputMaybe<Order_By>;
  guests_aggregate?: InputMaybe<Guests_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owners_aggregate?: InputMaybe<Events_Owners_Aggregate_Order_By>;
  questionnaires_aggregate?: InputMaybe<Questionnaire_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** Holds owners for each event */
export type Events_Owners = {
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  event: Events;
  event_id: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int']['output'];
};

/** aggregated selection of "events_owners" */
export type Events_Owners_Aggregate = {
  aggregate?: Maybe<Events_Owners_Aggregate_Fields>;
  nodes: Array<Events_Owners>;
};

export type Events_Owners_Aggregate_Bool_Exp = {
  count?: InputMaybe<Events_Owners_Aggregate_Bool_Exp_Count>;
};

export type Events_Owners_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Events_Owners_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Events_Owners_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "events_owners" */
export type Events_Owners_Aggregate_Fields = {
  avg?: Maybe<Events_Owners_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Events_Owners_Max_Fields>;
  min?: Maybe<Events_Owners_Min_Fields>;
  stddev?: Maybe<Events_Owners_Stddev_Fields>;
  stddev_pop?: Maybe<Events_Owners_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Events_Owners_Stddev_Samp_Fields>;
  sum?: Maybe<Events_Owners_Sum_Fields>;
  var_pop?: Maybe<Events_Owners_Var_Pop_Fields>;
  var_samp?: Maybe<Events_Owners_Var_Samp_Fields>;
  variance?: Maybe<Events_Owners_Variance_Fields>;
};


/** aggregate fields of "events_owners" */
export type Events_Owners_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Events_Owners_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "events_owners" */
export type Events_Owners_Aggregate_Order_By = {
  avg?: InputMaybe<Events_Owners_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Events_Owners_Max_Order_By>;
  min?: InputMaybe<Events_Owners_Min_Order_By>;
  stddev?: InputMaybe<Events_Owners_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Events_Owners_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Events_Owners_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Events_Owners_Sum_Order_By>;
  var_pop?: InputMaybe<Events_Owners_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Events_Owners_Var_Samp_Order_By>;
  variance?: InputMaybe<Events_Owners_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "events_owners" */
export type Events_Owners_Arr_Rel_Insert_Input = {
  data: Array<Events_Owners_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Events_Owners_On_Conflict>;
};

/** aggregate avg on columns */
export type Events_Owners_Avg_Fields = {
  event_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "events_owners" */
export type Events_Owners_Avg_Order_By = {
  event_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "events_owners". All fields are combined with a logical 'AND'. */
export type Events_Owners_Bool_Exp = {
  _and?: InputMaybe<Array<Events_Owners_Bool_Exp>>;
  _not?: InputMaybe<Events_Owners_Bool_Exp>;
  _or?: InputMaybe<Array<Events_Owners_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  event?: InputMaybe<Events_Bool_Exp>;
  event_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "events_owners" */
export type Events_Owners_Constraint =
  /** unique or primary key constraint on columns "user_id", "event_id" */
  | 'events_owners_pkey';

/** input type for incrementing numeric columns in table "events_owners" */
export type Events_Owners_Inc_Input = {
  event_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "events_owners" */
export type Events_Owners_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  event?: InputMaybe<Events_Obj_Rel_Insert_Input>;
  event_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Events_Owners_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  event_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "events_owners" */
export type Events_Owners_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Events_Owners_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  event_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "events_owners" */
export type Events_Owners_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "events_owners" */
export type Events_Owners_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Events_Owners>;
};

/** on_conflict condition type for table "events_owners" */
export type Events_Owners_On_Conflict = {
  constraint: Events_Owners_Constraint;
  update_columns?: Array<Events_Owners_Update_Column>;
  where?: InputMaybe<Events_Owners_Bool_Exp>;
};

/** Ordering options when selecting data from "events_owners". */
export type Events_Owners_Order_By = {
  created_at?: InputMaybe<Order_By>;
  event?: InputMaybe<Events_Order_By>;
  event_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: events_owners */
export type Events_Owners_Pk_Columns_Input = {
  event_id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};

/** select columns of table "events_owners" */
export type Events_Owners_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'event_id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

/** input type for updating data in table "events_owners" */
export type Events_Owners_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  event_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Events_Owners_Stddev_Fields = {
  event_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "events_owners" */
export type Events_Owners_Stddev_Order_By = {
  event_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Events_Owners_Stddev_Pop_Fields = {
  event_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "events_owners" */
export type Events_Owners_Stddev_Pop_Order_By = {
  event_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Events_Owners_Stddev_Samp_Fields = {
  event_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "events_owners" */
export type Events_Owners_Stddev_Samp_Order_By = {
  event_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "events_owners" */
export type Events_Owners_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Events_Owners_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Events_Owners_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  event_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Events_Owners_Sum_Fields = {
  event_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "events_owners" */
export type Events_Owners_Sum_Order_By = {
  event_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "events_owners" */
export type Events_Owners_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'event_id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

export type Events_Owners_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Events_Owners_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Events_Owners_Set_Input>;
  /** filter the rows which have to be updated */
  where: Events_Owners_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Events_Owners_Var_Pop_Fields = {
  event_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "events_owners" */
export type Events_Owners_Var_Pop_Order_By = {
  event_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Events_Owners_Var_Samp_Fields = {
  event_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "events_owners" */
export type Events_Owners_Var_Samp_Order_By = {
  event_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Events_Owners_Variance_Fields = {
  event_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "events_owners" */
export type Events_Owners_Variance_Order_By = {
  event_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: events */
export type Events_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "events" */
export type Events_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'datetime'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'location'
  /** column name */
  | 'name'
  /** column name */
  | 'type'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "events" */
export type Events_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  datetime?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Events_Stddev_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Events_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Events_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "events" */
export type Events_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Events_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Events_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  datetime?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Events_Sum_Fields = {
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "events" */
export type Events_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'datetime'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'location'
  /** column name */
  | 'name'
  /** column name */
  | 'type'
  /** column name */
  | 'updated_at';

export type Events_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Events_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Events_Set_Input>;
  /** filter the rows which have to be updated */
  where: Events_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Events_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Events_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Events_Variance_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Get_Questionnaire_Ranking_Args = {
  questionnaire_id?: InputMaybe<Scalars['Int']['input']>;
};

/** Holds the guests of all events */
export type Guests = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  event: Events;
  event_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "guests" */
export type Guests_Aggregate = {
  aggregate?: Maybe<Guests_Aggregate_Fields>;
  nodes: Array<Guests>;
};

export type Guests_Aggregate_Bool_Exp = {
  count?: InputMaybe<Guests_Aggregate_Bool_Exp_Count>;
};

export type Guests_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Guests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Guests_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "guests" */
export type Guests_Aggregate_Fields = {
  avg?: Maybe<Guests_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Guests_Max_Fields>;
  min?: Maybe<Guests_Min_Fields>;
  stddev?: Maybe<Guests_Stddev_Fields>;
  stddev_pop?: Maybe<Guests_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Guests_Stddev_Samp_Fields>;
  sum?: Maybe<Guests_Sum_Fields>;
  var_pop?: Maybe<Guests_Var_Pop_Fields>;
  var_samp?: Maybe<Guests_Var_Samp_Fields>;
  variance?: Maybe<Guests_Variance_Fields>;
};


/** aggregate fields of "guests" */
export type Guests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Guests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "guests" */
export type Guests_Aggregate_Order_By = {
  avg?: InputMaybe<Guests_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Guests_Max_Order_By>;
  min?: InputMaybe<Guests_Min_Order_By>;
  stddev?: InputMaybe<Guests_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Guests_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Guests_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Guests_Sum_Order_By>;
  var_pop?: InputMaybe<Guests_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Guests_Var_Samp_Order_By>;
  variance?: InputMaybe<Guests_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "guests" */
export type Guests_Arr_Rel_Insert_Input = {
  data: Array<Guests_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Guests_On_Conflict>;
};

/** aggregate avg on columns */
export type Guests_Avg_Fields = {
  event_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "guests" */
export type Guests_Avg_Order_By = {
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "guests". All fields are combined with a logical 'AND'. */
export type Guests_Bool_Exp = {
  _and?: InputMaybe<Array<Guests_Bool_Exp>>;
  _not?: InputMaybe<Guests_Bool_Exp>;
  _or?: InputMaybe<Array<Guests_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  event?: InputMaybe<Events_Bool_Exp>;
  event_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "guests" */
export type Guests_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'guests_pkey1';

/** input type for incrementing numeric columns in table "guests" */
export type Guests_Inc_Input = {
  event_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "guests" */
export type Guests_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  event?: InputMaybe<Events_Obj_Rel_Insert_Input>;
  event_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Guests_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  event_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "guests" */
export type Guests_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Guests_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  event_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "guests" */
export type Guests_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "guests" */
export type Guests_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Guests>;
};

/** on_conflict condition type for table "guests" */
export type Guests_On_Conflict = {
  constraint: Guests_Constraint;
  update_columns?: Array<Guests_Update_Column>;
  where?: InputMaybe<Guests_Bool_Exp>;
};

/** Ordering options when selecting data from "guests". */
export type Guests_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  event?: InputMaybe<Events_Order_By>;
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: guests */
export type Guests_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "guests" */
export type Guests_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'email'
  /** column name */
  | 'event_id'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'phone'
  /** column name */
  | 'status'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

/** input type for updating data in table "guests" */
export type Guests_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  event_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Guests_Stddev_Fields = {
  event_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "guests" */
export type Guests_Stddev_Order_By = {
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Guests_Stddev_Pop_Fields = {
  event_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "guests" */
export type Guests_Stddev_Pop_Order_By = {
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Guests_Stddev_Samp_Fields = {
  event_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "guests" */
export type Guests_Stddev_Samp_Order_By = {
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "guests" */
export type Guests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Guests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Guests_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  event_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Guests_Sum_Fields = {
  event_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "guests" */
export type Guests_Sum_Order_By = {
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "guests" */
export type Guests_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'email'
  /** column name */
  | 'event_id'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'phone'
  /** column name */
  | 'status'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

export type Guests_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Guests_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Guests_Set_Input>;
  /** filter the rows which have to be updated */
  where: Guests_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Guests_Var_Pop_Fields = {
  event_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "guests" */
export type Guests_Var_Pop_Order_By = {
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Guests_Var_Samp_Fields = {
  event_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "guests" */
export type Guests_Var_Samp_Order_By = {
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Guests_Variance_Fields = {
  event_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "guests" */
export type Guests_Variance_Order_By = {
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** Holds info about all actions taken on the platform */
export type Log = {
  browser?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  details?: Maybe<Scalars['jsonb']['output']>;
  id: Scalars['Int']['output'];
  ip_address: Scalars['String']['output'];
  message: Scalars['String']['output'];
  os?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['Int']['output']>;
};


/** Holds info about all actions taken on the platform */
export type LogDetailsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "log" */
export type Log_Aggregate = {
  aggregate?: Maybe<Log_Aggregate_Fields>;
  nodes: Array<Log>;
};

/** aggregate fields of "log" */
export type Log_Aggregate_Fields = {
  avg?: Maybe<Log_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Log_Max_Fields>;
  min?: Maybe<Log_Min_Fields>;
  stddev?: Maybe<Log_Stddev_Fields>;
  stddev_pop?: Maybe<Log_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Log_Stddev_Samp_Fields>;
  sum?: Maybe<Log_Sum_Fields>;
  var_pop?: Maybe<Log_Var_Pop_Fields>;
  var_samp?: Maybe<Log_Var_Samp_Fields>;
  variance?: Maybe<Log_Variance_Fields>;
};


/** aggregate fields of "log" */
export type Log_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Log_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Log_Append_Input = {
  details?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Log_Avg_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "log". All fields are combined with a logical 'AND'. */
export type Log_Bool_Exp = {
  _and?: InputMaybe<Array<Log_Bool_Exp>>;
  _not?: InputMaybe<Log_Bool_Exp>;
  _or?: InputMaybe<Array<Log_Bool_Exp>>;
  browser?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  details?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  ip_address?: InputMaybe<String_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  os?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "log" */
export type Log_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'log_pkey';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Log_Delete_At_Path_Input = {
  details?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Log_Delete_Elem_Input = {
  details?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Log_Delete_Key_Input = {
  details?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "log" */
export type Log_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "log" */
export type Log_Insert_Input = {
  browser?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  details?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  os?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Log_Max_Fields = {
  browser?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  os?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Log_Min_Fields = {
  browser?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  os?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "log" */
export type Log_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Log>;
};

/** on_conflict condition type for table "log" */
export type Log_On_Conflict = {
  constraint: Log_Constraint;
  update_columns?: Array<Log_Update_Column>;
  where?: InputMaybe<Log_Bool_Exp>;
};

/** Ordering options when selecting data from "log". */
export type Log_Order_By = {
  browser?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip_address?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  os?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: log */
export type Log_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Log_Prepend_Input = {
  details?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "log" */
export type Log_Select_Column =
  /** column name */
  | 'browser'
  /** column name */
  | 'created_at'
  /** column name */
  | 'details'
  /** column name */
  | 'id'
  /** column name */
  | 'ip_address'
  /** column name */
  | 'message'
  /** column name */
  | 'os'
  /** column name */
  | 'type'
  /** column name */
  | 'user_id';

/** input type for updating data in table "log" */
export type Log_Set_Input = {
  browser?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  details?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  os?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Log_Stddev_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Log_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Log_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "log" */
export type Log_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Log_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Log_Stream_Cursor_Value_Input = {
  browser?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  details?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  os?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Log_Sum_Fields = {
  id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "log" */
export type Log_Update_Column =
  /** column name */
  | 'browser'
  /** column name */
  | 'created_at'
  /** column name */
  | 'details'
  /** column name */
  | 'id'
  /** column name */
  | 'ip_address'
  /** column name */
  | 'message'
  /** column name */
  | 'os'
  /** column name */
  | 'type'
  /** column name */
  | 'user_id';

export type Log_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Log_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Log_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Log_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Log_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Log_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Log_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Log_Set_Input>;
  /** filter the rows which have to be updated */
  where: Log_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Log_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Log_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Log_Variance_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "answers" */
  delete_answers?: Maybe<Answers_Mutation_Response>;
  /** delete single row from the table: "answers" */
  delete_answers_by_pk?: Maybe<Answers>;
  /** delete data from the table: "events" */
  delete_events?: Maybe<Events_Mutation_Response>;
  /** delete single row from the table: "events" */
  delete_events_by_pk?: Maybe<Events>;
  /** delete data from the table: "events_owners" */
  delete_events_owners?: Maybe<Events_Owners_Mutation_Response>;
  /** delete single row from the table: "events_owners" */
  delete_events_owners_by_pk?: Maybe<Events_Owners>;
  /** delete data from the table: "guests" */
  delete_guests?: Maybe<Guests_Mutation_Response>;
  /** delete single row from the table: "guests" */
  delete_guests_by_pk?: Maybe<Guests>;
  /** delete data from the table: "log" */
  delete_log?: Maybe<Log_Mutation_Response>;
  /** delete single row from the table: "log" */
  delete_log_by_pk?: Maybe<Log>;
  /** delete data from the table: "options" */
  delete_options?: Maybe<Options_Mutation_Response>;
  /** delete single row from the table: "options" */
  delete_options_by_pk?: Maybe<Options>;
  /** delete data from the table: "prizes" */
  delete_prizes?: Maybe<Prizes_Mutation_Response>;
  /** delete single row from the table: "prizes" */
  delete_prizes_by_pk?: Maybe<Prizes>;
  /** delete data from the table: "questionnaire" */
  delete_questionnaire?: Maybe<Questionnaire_Mutation_Response>;
  /** delete single row from the table: "questionnaire" */
  delete_questionnaire_by_pk?: Maybe<Questionnaire>;
  /** delete data from the table: "questionnaire_ranking" */
  delete_questionnaire_ranking?: Maybe<Questionnaire_Ranking_Mutation_Response>;
  /** delete data from the table: "questions" */
  delete_questions?: Maybe<Questions_Mutation_Response>;
  /** delete single row from the table: "questions" */
  delete_questions_by_pk?: Maybe<Questions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "answers" */
  insert_answers?: Maybe<Answers_Mutation_Response>;
  /** insert a single row into the table: "answers" */
  insert_answers_one?: Maybe<Answers>;
  /** insert data into the table: "events" */
  insert_events?: Maybe<Events_Mutation_Response>;
  /** insert a single row into the table: "events" */
  insert_events_one?: Maybe<Events>;
  /** insert data into the table: "events_owners" */
  insert_events_owners?: Maybe<Events_Owners_Mutation_Response>;
  /** insert a single row into the table: "events_owners" */
  insert_events_owners_one?: Maybe<Events_Owners>;
  /** insert data into the table: "guests" */
  insert_guests?: Maybe<Guests_Mutation_Response>;
  /** insert a single row into the table: "guests" */
  insert_guests_one?: Maybe<Guests>;
  /** insert data into the table: "log" */
  insert_log?: Maybe<Log_Mutation_Response>;
  /** insert a single row into the table: "log" */
  insert_log_one?: Maybe<Log>;
  /** insert data into the table: "options" */
  insert_options?: Maybe<Options_Mutation_Response>;
  /** insert a single row into the table: "options" */
  insert_options_one?: Maybe<Options>;
  /** insert data into the table: "prizes" */
  insert_prizes?: Maybe<Prizes_Mutation_Response>;
  /** insert a single row into the table: "prizes" */
  insert_prizes_one?: Maybe<Prizes>;
  /** insert data into the table: "questionnaire" */
  insert_questionnaire?: Maybe<Questionnaire_Mutation_Response>;
  /** insert a single row into the table: "questionnaire" */
  insert_questionnaire_one?: Maybe<Questionnaire>;
  /** insert data into the table: "questionnaire_ranking" */
  insert_questionnaire_ranking?: Maybe<Questionnaire_Ranking_Mutation_Response>;
  /** insert a single row into the table: "questionnaire_ranking" */
  insert_questionnaire_ranking_one?: Maybe<Questionnaire_Ranking>;
  /** insert data into the table: "questions" */
  insert_questions?: Maybe<Questions_Mutation_Response>;
  /** insert a single row into the table: "questions" */
  insert_questions_one?: Maybe<Questions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "answers" */
  update_answers?: Maybe<Answers_Mutation_Response>;
  /** update single row of the table: "answers" */
  update_answers_by_pk?: Maybe<Answers>;
  /** update multiples rows of table: "answers" */
  update_answers_many?: Maybe<Array<Maybe<Answers_Mutation_Response>>>;
  /** update data of the table: "events" */
  update_events?: Maybe<Events_Mutation_Response>;
  /** update single row of the table: "events" */
  update_events_by_pk?: Maybe<Events>;
  /** update multiples rows of table: "events" */
  update_events_many?: Maybe<Array<Maybe<Events_Mutation_Response>>>;
  /** update data of the table: "events_owners" */
  update_events_owners?: Maybe<Events_Owners_Mutation_Response>;
  /** update single row of the table: "events_owners" */
  update_events_owners_by_pk?: Maybe<Events_Owners>;
  /** update multiples rows of table: "events_owners" */
  update_events_owners_many?: Maybe<Array<Maybe<Events_Owners_Mutation_Response>>>;
  /** update data of the table: "guests" */
  update_guests?: Maybe<Guests_Mutation_Response>;
  /** update single row of the table: "guests" */
  update_guests_by_pk?: Maybe<Guests>;
  /** update multiples rows of table: "guests" */
  update_guests_many?: Maybe<Array<Maybe<Guests_Mutation_Response>>>;
  /** update data of the table: "log" */
  update_log?: Maybe<Log_Mutation_Response>;
  /** update single row of the table: "log" */
  update_log_by_pk?: Maybe<Log>;
  /** update multiples rows of table: "log" */
  update_log_many?: Maybe<Array<Maybe<Log_Mutation_Response>>>;
  /** update data of the table: "options" */
  update_options?: Maybe<Options_Mutation_Response>;
  /** update single row of the table: "options" */
  update_options_by_pk?: Maybe<Options>;
  /** update multiples rows of table: "options" */
  update_options_many?: Maybe<Array<Maybe<Options_Mutation_Response>>>;
  /** update data of the table: "prizes" */
  update_prizes?: Maybe<Prizes_Mutation_Response>;
  /** update single row of the table: "prizes" */
  update_prizes_by_pk?: Maybe<Prizes>;
  /** update multiples rows of table: "prizes" */
  update_prizes_many?: Maybe<Array<Maybe<Prizes_Mutation_Response>>>;
  /** update data of the table: "questionnaire" */
  update_questionnaire?: Maybe<Questionnaire_Mutation_Response>;
  /** update single row of the table: "questionnaire" */
  update_questionnaire_by_pk?: Maybe<Questionnaire>;
  /** update multiples rows of table: "questionnaire" */
  update_questionnaire_many?: Maybe<Array<Maybe<Questionnaire_Mutation_Response>>>;
  /** update data of the table: "questionnaire_ranking" */
  update_questionnaire_ranking?: Maybe<Questionnaire_Ranking_Mutation_Response>;
  /** update multiples rows of table: "questionnaire_ranking" */
  update_questionnaire_ranking_many?: Maybe<Array<Maybe<Questionnaire_Ranking_Mutation_Response>>>;
  /** update data of the table: "questions" */
  update_questions?: Maybe<Questions_Mutation_Response>;
  /** update single row of the table: "questions" */
  update_questions_by_pk?: Maybe<Questions>;
  /** update multiples rows of table: "questions" */
  update_questions_many?: Maybe<Array<Maybe<Questions_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AnswersArgs = {
  where: Answers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Answers_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_EventsArgs = {
  where: Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Events_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Events_OwnersArgs = {
  where: Events_Owners_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Events_Owners_By_PkArgs = {
  event_id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_GuestsArgs = {
  where: Guests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Guests_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_LogArgs = {
  where: Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Log_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OptionsArgs = {
  where: Options_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Options_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PrizesArgs = {
  where: Prizes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Prizes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_QuestionnaireArgs = {
  where: Questionnaire_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Questionnaire_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Questionnaire_RankingArgs = {
  where: Questionnaire_Ranking_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_QuestionsArgs = {
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Questions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AnswersArgs = {
  objects: Array<Answers_Insert_Input>;
  on_conflict?: InputMaybe<Answers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Answers_OneArgs = {
  object: Answers_Insert_Input;
  on_conflict?: InputMaybe<Answers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EventsArgs = {
  objects: Array<Events_Insert_Input>;
  on_conflict?: InputMaybe<Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Events_OneArgs = {
  object: Events_Insert_Input;
  on_conflict?: InputMaybe<Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Events_OwnersArgs = {
  objects: Array<Events_Owners_Insert_Input>;
  on_conflict?: InputMaybe<Events_Owners_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Events_Owners_OneArgs = {
  object: Events_Owners_Insert_Input;
  on_conflict?: InputMaybe<Events_Owners_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GuestsArgs = {
  objects: Array<Guests_Insert_Input>;
  on_conflict?: InputMaybe<Guests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Guests_OneArgs = {
  object: Guests_Insert_Input;
  on_conflict?: InputMaybe<Guests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LogArgs = {
  objects: Array<Log_Insert_Input>;
  on_conflict?: InputMaybe<Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Log_OneArgs = {
  object: Log_Insert_Input;
  on_conflict?: InputMaybe<Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OptionsArgs = {
  objects: Array<Options_Insert_Input>;
  on_conflict?: InputMaybe<Options_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Options_OneArgs = {
  object: Options_Insert_Input;
  on_conflict?: InputMaybe<Options_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PrizesArgs = {
  objects: Array<Prizes_Insert_Input>;
  on_conflict?: InputMaybe<Prizes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Prizes_OneArgs = {
  object: Prizes_Insert_Input;
  on_conflict?: InputMaybe<Prizes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestionnaireArgs = {
  objects: Array<Questionnaire_Insert_Input>;
  on_conflict?: InputMaybe<Questionnaire_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questionnaire_OneArgs = {
  object: Questionnaire_Insert_Input;
  on_conflict?: InputMaybe<Questionnaire_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questionnaire_RankingArgs = {
  objects: Array<Questionnaire_Ranking_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Questionnaire_Ranking_OneArgs = {
  object: Questionnaire_Ranking_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_QuestionsArgs = {
  objects: Array<Questions_Insert_Input>;
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questions_OneArgs = {
  object: Questions_Insert_Input;
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AnswersArgs = {
  _inc?: InputMaybe<Answers_Inc_Input>;
  _set?: InputMaybe<Answers_Set_Input>;
  where: Answers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Answers_By_PkArgs = {
  _inc?: InputMaybe<Answers_Inc_Input>;
  _set?: InputMaybe<Answers_Set_Input>;
  pk_columns: Answers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Answers_ManyArgs = {
  updates: Array<Answers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_EventsArgs = {
  _inc?: InputMaybe<Events_Inc_Input>;
  _set?: InputMaybe<Events_Set_Input>;
  where: Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Events_By_PkArgs = {
  _inc?: InputMaybe<Events_Inc_Input>;
  _set?: InputMaybe<Events_Set_Input>;
  pk_columns: Events_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Events_ManyArgs = {
  updates: Array<Events_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Events_OwnersArgs = {
  _inc?: InputMaybe<Events_Owners_Inc_Input>;
  _set?: InputMaybe<Events_Owners_Set_Input>;
  where: Events_Owners_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Events_Owners_By_PkArgs = {
  _inc?: InputMaybe<Events_Owners_Inc_Input>;
  _set?: InputMaybe<Events_Owners_Set_Input>;
  pk_columns: Events_Owners_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Events_Owners_ManyArgs = {
  updates: Array<Events_Owners_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GuestsArgs = {
  _inc?: InputMaybe<Guests_Inc_Input>;
  _set?: InputMaybe<Guests_Set_Input>;
  where: Guests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Guests_By_PkArgs = {
  _inc?: InputMaybe<Guests_Inc_Input>;
  _set?: InputMaybe<Guests_Set_Input>;
  pk_columns: Guests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Guests_ManyArgs = {
  updates: Array<Guests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LogArgs = {
  _append?: InputMaybe<Log_Append_Input>;
  _delete_at_path?: InputMaybe<Log_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Log_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Log_Delete_Key_Input>;
  _inc?: InputMaybe<Log_Inc_Input>;
  _prepend?: InputMaybe<Log_Prepend_Input>;
  _set?: InputMaybe<Log_Set_Input>;
  where: Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Log_By_PkArgs = {
  _append?: InputMaybe<Log_Append_Input>;
  _delete_at_path?: InputMaybe<Log_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Log_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Log_Delete_Key_Input>;
  _inc?: InputMaybe<Log_Inc_Input>;
  _prepend?: InputMaybe<Log_Prepend_Input>;
  _set?: InputMaybe<Log_Set_Input>;
  pk_columns: Log_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Log_ManyArgs = {
  updates: Array<Log_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OptionsArgs = {
  _inc?: InputMaybe<Options_Inc_Input>;
  _set?: InputMaybe<Options_Set_Input>;
  where: Options_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Options_By_PkArgs = {
  _inc?: InputMaybe<Options_Inc_Input>;
  _set?: InputMaybe<Options_Set_Input>;
  pk_columns: Options_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Options_ManyArgs = {
  updates: Array<Options_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PrizesArgs = {
  _inc?: InputMaybe<Prizes_Inc_Input>;
  _set?: InputMaybe<Prizes_Set_Input>;
  where: Prizes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Prizes_By_PkArgs = {
  _inc?: InputMaybe<Prizes_Inc_Input>;
  _set?: InputMaybe<Prizes_Set_Input>;
  pk_columns: Prizes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Prizes_ManyArgs = {
  updates: Array<Prizes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_QuestionnaireArgs = {
  _inc?: InputMaybe<Questionnaire_Inc_Input>;
  _set?: InputMaybe<Questionnaire_Set_Input>;
  where: Questionnaire_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Questionnaire_By_PkArgs = {
  _inc?: InputMaybe<Questionnaire_Inc_Input>;
  _set?: InputMaybe<Questionnaire_Set_Input>;
  pk_columns: Questionnaire_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Questionnaire_ManyArgs = {
  updates: Array<Questionnaire_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Questionnaire_RankingArgs = {
  _inc?: InputMaybe<Questionnaire_Ranking_Inc_Input>;
  _set?: InputMaybe<Questionnaire_Ranking_Set_Input>;
  where: Questionnaire_Ranking_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Questionnaire_Ranking_ManyArgs = {
  updates: Array<Questionnaire_Ranking_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_QuestionsArgs = {
  _inc?: InputMaybe<Questions_Inc_Input>;
  _set?: InputMaybe<Questions_Set_Input>;
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Questions_By_PkArgs = {
  _inc?: InputMaybe<Questions_Inc_Input>;
  _set?: InputMaybe<Questions_Set_Input>;
  pk_columns: Questions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Questions_ManyArgs = {
  updates: Array<Questions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** Holds all options for multiple choice questions */
export type Options = {
  /** An array relationship */
  answers: Array<Answers>;
  /** An aggregate relationship */
  answers_aggregate: Answers_Aggregate;
  correct: Scalars['Boolean']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  question: Questions;
  question_id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** Holds all options for multiple choice questions */
export type OptionsAnswersArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


/** Holds all options for multiple choice questions */
export type OptionsAnswers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};

/** aggregated selection of "options" */
export type Options_Aggregate = {
  aggregate?: Maybe<Options_Aggregate_Fields>;
  nodes: Array<Options>;
};

export type Options_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Options_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Options_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Options_Aggregate_Bool_Exp_Count>;
};

export type Options_Aggregate_Bool_Exp_Bool_And = {
  arguments: Options_Select_Column_Options_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Options_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Options_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Options_Select_Column_Options_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Options_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Options_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Options_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Options_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "options" */
export type Options_Aggregate_Fields = {
  avg?: Maybe<Options_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Options_Max_Fields>;
  min?: Maybe<Options_Min_Fields>;
  stddev?: Maybe<Options_Stddev_Fields>;
  stddev_pop?: Maybe<Options_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Options_Stddev_Samp_Fields>;
  sum?: Maybe<Options_Sum_Fields>;
  var_pop?: Maybe<Options_Var_Pop_Fields>;
  var_samp?: Maybe<Options_Var_Samp_Fields>;
  variance?: Maybe<Options_Variance_Fields>;
};


/** aggregate fields of "options" */
export type Options_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Options_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "options" */
export type Options_Aggregate_Order_By = {
  avg?: InputMaybe<Options_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Options_Max_Order_By>;
  min?: InputMaybe<Options_Min_Order_By>;
  stddev?: InputMaybe<Options_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Options_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Options_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Options_Sum_Order_By>;
  var_pop?: InputMaybe<Options_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Options_Var_Samp_Order_By>;
  variance?: InputMaybe<Options_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "options" */
export type Options_Arr_Rel_Insert_Input = {
  data: Array<Options_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Options_On_Conflict>;
};

/** aggregate avg on columns */
export type Options_Avg_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  question_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "options" */
export type Options_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "options". All fields are combined with a logical 'AND'. */
export type Options_Bool_Exp = {
  _and?: InputMaybe<Array<Options_Bool_Exp>>;
  _not?: InputMaybe<Options_Bool_Exp>;
  _or?: InputMaybe<Array<Options_Bool_Exp>>;
  answers?: InputMaybe<Answers_Bool_Exp>;
  answers_aggregate?: InputMaybe<Answers_Aggregate_Bool_Exp>;
  correct?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  question?: InputMaybe<Questions_Bool_Exp>;
  question_id?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "options" */
export type Options_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'optiona_pkey';

/** input type for incrementing numeric columns in table "options" */
export type Options_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  question_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "options" */
export type Options_Insert_Input = {
  answers?: InputMaybe<Answers_Arr_Rel_Insert_Input>;
  correct?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  question?: InputMaybe<Questions_Obj_Rel_Insert_Input>;
  question_id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Options_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  question_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "options" */
export type Options_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Options_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  question_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "options" */
export type Options_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "options" */
export type Options_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Options>;
};

/** on_conflict condition type for table "options" */
export type Options_On_Conflict = {
  constraint: Options_Constraint;
  update_columns?: Array<Options_Update_Column>;
  where?: InputMaybe<Options_Bool_Exp>;
};

/** Ordering options when selecting data from "options". */
export type Options_Order_By = {
  answers_aggregate?: InputMaybe<Answers_Aggregate_Order_By>;
  correct?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  question?: InputMaybe<Questions_Order_By>;
  question_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: options */
export type Options_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "options" */
export type Options_Select_Column =
  /** column name */
  | 'correct'
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'question_id'
  /** column name */
  | 'title'
  /** column name */
  | 'updated_at';

/** select "options_aggregate_bool_exp_bool_and_arguments_columns" columns of table "options" */
export type Options_Select_Column_Options_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'correct';

/** select "options_aggregate_bool_exp_bool_or_arguments_columns" columns of table "options" */
export type Options_Select_Column_Options_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'correct';

/** input type for updating data in table "options" */
export type Options_Set_Input = {
  correct?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  question_id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Options_Stddev_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  question_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "options" */
export type Options_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Options_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  question_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "options" */
export type Options_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Options_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  question_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "options" */
export type Options_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "options" */
export type Options_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Options_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Options_Stream_Cursor_Value_Input = {
  correct?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  question_id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Options_Sum_Fields = {
  id?: Maybe<Scalars['Int']['output']>;
  question_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "options" */
export type Options_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
};

/** update columns of table "options" */
export type Options_Update_Column =
  /** column name */
  | 'correct'
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'question_id'
  /** column name */
  | 'title'
  /** column name */
  | 'updated_at';

export type Options_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Options_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Options_Set_Input>;
  /** filter the rows which have to be updated */
  where: Options_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Options_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  question_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "options" */
export type Options_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Options_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  question_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "options" */
export type Options_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Options_Variance_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  question_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "options" */
export type Options_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  question_id?: InputMaybe<Order_By>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

/** Holds the prizes for all questionnaires */
export type Prizes = {
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** An object relationship */
  questionnaire: Questionnaire;
  questionnaire_id: Scalars['Int']['output'];
  ranking: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "prizes" */
export type Prizes_Aggregate = {
  aggregate?: Maybe<Prizes_Aggregate_Fields>;
  nodes: Array<Prizes>;
};

export type Prizes_Aggregate_Bool_Exp = {
  count?: InputMaybe<Prizes_Aggregate_Bool_Exp_Count>;
};

export type Prizes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Prizes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Prizes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "prizes" */
export type Prizes_Aggregate_Fields = {
  avg?: Maybe<Prizes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Prizes_Max_Fields>;
  min?: Maybe<Prizes_Min_Fields>;
  stddev?: Maybe<Prizes_Stddev_Fields>;
  stddev_pop?: Maybe<Prizes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Prizes_Stddev_Samp_Fields>;
  sum?: Maybe<Prizes_Sum_Fields>;
  var_pop?: Maybe<Prizes_Var_Pop_Fields>;
  var_samp?: Maybe<Prizes_Var_Samp_Fields>;
  variance?: Maybe<Prizes_Variance_Fields>;
};


/** aggregate fields of "prizes" */
export type Prizes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Prizes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "prizes" */
export type Prizes_Aggregate_Order_By = {
  avg?: InputMaybe<Prizes_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Prizes_Max_Order_By>;
  min?: InputMaybe<Prizes_Min_Order_By>;
  stddev?: InputMaybe<Prizes_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Prizes_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Prizes_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Prizes_Sum_Order_By>;
  var_pop?: InputMaybe<Prizes_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Prizes_Var_Samp_Order_By>;
  variance?: InputMaybe<Prizes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "prizes" */
export type Prizes_Arr_Rel_Insert_Input = {
  data: Array<Prizes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Prizes_On_Conflict>;
};

/** aggregate avg on columns */
export type Prizes_Avg_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  questionnaire_id?: Maybe<Scalars['Float']['output']>;
  ranking?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "prizes" */
export type Prizes_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "prizes". All fields are combined with a logical 'AND'. */
export type Prizes_Bool_Exp = {
  _and?: InputMaybe<Array<Prizes_Bool_Exp>>;
  _not?: InputMaybe<Prizes_Bool_Exp>;
  _or?: InputMaybe<Array<Prizes_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  questionnaire?: InputMaybe<Questionnaire_Bool_Exp>;
  questionnaire_id?: InputMaybe<Int_Comparison_Exp>;
  ranking?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "prizes" */
export type Prizes_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'prizes_pkey';

/** input type for incrementing numeric columns in table "prizes" */
export type Prizes_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  questionnaire_id?: InputMaybe<Scalars['Int']['input']>;
  ranking?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "prizes" */
export type Prizes_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  questionnaire?: InputMaybe<Questionnaire_Obj_Rel_Insert_Input>;
  questionnaire_id?: InputMaybe<Scalars['Int']['input']>;
  ranking?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Prizes_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  questionnaire_id?: Maybe<Scalars['Int']['output']>;
  ranking?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "prizes" */
export type Prizes_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Prizes_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  questionnaire_id?: Maybe<Scalars['Int']['output']>;
  ranking?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "prizes" */
export type Prizes_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "prizes" */
export type Prizes_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Prizes>;
};

/** on_conflict condition type for table "prizes" */
export type Prizes_On_Conflict = {
  constraint: Prizes_Constraint;
  update_columns?: Array<Prizes_Update_Column>;
  where?: InputMaybe<Prizes_Bool_Exp>;
};

/** Ordering options when selecting data from "prizes". */
export type Prizes_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  questionnaire?: InputMaybe<Questionnaire_Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: prizes */
export type Prizes_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "prizes" */
export type Prizes_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'name'
  /** column name */
  | 'questionnaire_id'
  /** column name */
  | 'ranking'
  /** column name */
  | 'status'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "prizes" */
export type Prizes_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  questionnaire_id?: InputMaybe<Scalars['Int']['input']>;
  ranking?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Prizes_Stddev_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  questionnaire_id?: Maybe<Scalars['Float']['output']>;
  ranking?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "prizes" */
export type Prizes_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Prizes_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  questionnaire_id?: Maybe<Scalars['Float']['output']>;
  ranking?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "prizes" */
export type Prizes_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Prizes_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  questionnaire_id?: Maybe<Scalars['Float']['output']>;
  ranking?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "prizes" */
export type Prizes_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "prizes" */
export type Prizes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Prizes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Prizes_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  questionnaire_id?: InputMaybe<Scalars['Int']['input']>;
  ranking?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Prizes_Sum_Fields = {
  id?: Maybe<Scalars['Int']['output']>;
  questionnaire_id?: Maybe<Scalars['Int']['output']>;
  ranking?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "prizes" */
export type Prizes_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
};

/** update columns of table "prizes" */
export type Prizes_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'name'
  /** column name */
  | 'questionnaire_id'
  /** column name */
  | 'ranking'
  /** column name */
  | 'status'
  /** column name */
  | 'updated_at';

export type Prizes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Prizes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Prizes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Prizes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Prizes_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  questionnaire_id?: Maybe<Scalars['Float']['output']>;
  ranking?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "prizes" */
export type Prizes_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Prizes_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  questionnaire_id?: Maybe<Scalars['Float']['output']>;
  ranking?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "prizes" */
export type Prizes_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Prizes_Variance_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  questionnaire_id?: Maybe<Scalars['Float']['output']>;
  ranking?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "prizes" */
export type Prizes_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  ranking?: InputMaybe<Order_By>;
};

export type Query_Root = {
  /** An array relationship */
  answers: Array<Answers>;
  /** An aggregate relationship */
  answers_aggregate: Answers_Aggregate;
  /** fetch data from the table: "answers" using primary key columns */
  answers_by_pk?: Maybe<Answers>;
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch aggregated fields from the table: "events" */
  events_aggregate: Events_Aggregate;
  /** fetch data from the table: "events" using primary key columns */
  events_by_pk?: Maybe<Events>;
  /** An array relationship */
  events_owners: Array<Events_Owners>;
  /** An aggregate relationship */
  events_owners_aggregate: Events_Owners_Aggregate;
  /** fetch data from the table: "events_owners" using primary key columns */
  events_owners_by_pk?: Maybe<Events_Owners>;
  /** execute function "get_questionnaire_ranking" which returns "questionnaire_ranking" */
  get_questionnaire_ranking: Array<Questionnaire_Ranking>;
  /** execute function "get_questionnaire_ranking" and query aggregates on result of table type "questionnaire_ranking" */
  get_questionnaire_ranking_aggregate: Questionnaire_Ranking_Aggregate;
  /** An array relationship */
  guests: Array<Guests>;
  /** An aggregate relationship */
  guests_aggregate: Guests_Aggregate;
  /** fetch data from the table: "guests" using primary key columns */
  guests_by_pk?: Maybe<Guests>;
  /** fetch data from the table: "log" */
  log: Array<Log>;
  /** fetch aggregated fields from the table: "log" */
  log_aggregate: Log_Aggregate;
  /** fetch data from the table: "log" using primary key columns */
  log_by_pk?: Maybe<Log>;
  /** An array relationship */
  options: Array<Options>;
  /** An aggregate relationship */
  options_aggregate: Options_Aggregate;
  /** fetch data from the table: "options" using primary key columns */
  options_by_pk?: Maybe<Options>;
  /** An array relationship */
  prizes: Array<Prizes>;
  /** An aggregate relationship */
  prizes_aggregate: Prizes_Aggregate;
  /** fetch data from the table: "prizes" using primary key columns */
  prizes_by_pk?: Maybe<Prizes>;
  /** fetch data from the table: "questionnaire" */
  questionnaire: Array<Questionnaire>;
  /** fetch aggregated fields from the table: "questionnaire" */
  questionnaire_aggregate: Questionnaire_Aggregate;
  /** fetch data from the table: "questionnaire" using primary key columns */
  questionnaire_by_pk?: Maybe<Questionnaire>;
  /** fetch data from the table: "questionnaire_ranking" */
  questionnaire_ranking: Array<Questionnaire_Ranking>;
  /** fetch aggregated fields from the table: "questionnaire_ranking" */
  questionnaire_ranking_aggregate: Questionnaire_Ranking_Aggregate;
  /** An array relationship */
  questions: Array<Questions>;
  /** An aggregate relationship */
  questions_aggregate: Questions_Aggregate;
  /** fetch data from the table: "questions" using primary key columns */
  questions_by_pk?: Maybe<Questions>;
  /** execute function "search_guests_by_name" which returns "guests" */
  search_guests_by_name: Array<Guests>;
  /** execute function "search_guests_by_name" and query aggregates on result of table type "guests" */
  search_guests_by_name_aggregate: Guests_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootAnswersArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Query_RootAnswers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Query_RootAnswers_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootEventsArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Query_RootEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Query_RootEvents_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootEvents_OwnersArgs = {
  distinct_on?: InputMaybe<Array<Events_Owners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Owners_Order_By>>;
  where?: InputMaybe<Events_Owners_Bool_Exp>;
};


export type Query_RootEvents_Owners_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Owners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Owners_Order_By>>;
  where?: InputMaybe<Events_Owners_Bool_Exp>;
};


export type Query_RootEvents_Owners_By_PkArgs = {
  event_id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};


export type Query_RootGet_Questionnaire_RankingArgs = {
  args: Get_Questionnaire_Ranking_Args;
  distinct_on?: InputMaybe<Array<Questionnaire_Ranking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questionnaire_Ranking_Order_By>>;
  where?: InputMaybe<Questionnaire_Ranking_Bool_Exp>;
};


export type Query_RootGet_Questionnaire_Ranking_AggregateArgs = {
  args: Get_Questionnaire_Ranking_Args;
  distinct_on?: InputMaybe<Array<Questionnaire_Ranking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questionnaire_Ranking_Order_By>>;
  where?: InputMaybe<Questionnaire_Ranking_Bool_Exp>;
};


export type Query_RootGuestsArgs = {
  distinct_on?: InputMaybe<Array<Guests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Guests_Order_By>>;
  where?: InputMaybe<Guests_Bool_Exp>;
};


export type Query_RootGuests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Guests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Guests_Order_By>>;
  where?: InputMaybe<Guests_Bool_Exp>;
};


export type Query_RootGuests_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootLogArgs = {
  distinct_on?: InputMaybe<Array<Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Log_Order_By>>;
  where?: InputMaybe<Log_Bool_Exp>;
};


export type Query_RootLog_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Log_Order_By>>;
  where?: InputMaybe<Log_Bool_Exp>;
};


export type Query_RootLog_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOptionsArgs = {
  distinct_on?: InputMaybe<Array<Options_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Options_Order_By>>;
  where?: InputMaybe<Options_Bool_Exp>;
};


export type Query_RootOptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Options_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Options_Order_By>>;
  where?: InputMaybe<Options_Bool_Exp>;
};


export type Query_RootOptions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPrizesArgs = {
  distinct_on?: InputMaybe<Array<Prizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prizes_Order_By>>;
  where?: InputMaybe<Prizes_Bool_Exp>;
};


export type Query_RootPrizes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prizes_Order_By>>;
  where?: InputMaybe<Prizes_Bool_Exp>;
};


export type Query_RootPrizes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootQuestionnaireArgs = {
  distinct_on?: InputMaybe<Array<Questionnaire_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questionnaire_Order_By>>;
  where?: InputMaybe<Questionnaire_Bool_Exp>;
};


export type Query_RootQuestionnaire_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questionnaire_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questionnaire_Order_By>>;
  where?: InputMaybe<Questionnaire_Bool_Exp>;
};


export type Query_RootQuestionnaire_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootQuestionnaire_RankingArgs = {
  distinct_on?: InputMaybe<Array<Questionnaire_Ranking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questionnaire_Ranking_Order_By>>;
  where?: InputMaybe<Questionnaire_Ranking_Bool_Exp>;
};


export type Query_RootQuestionnaire_Ranking_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questionnaire_Ranking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questionnaire_Ranking_Order_By>>;
  where?: InputMaybe<Questionnaire_Ranking_Bool_Exp>;
};


export type Query_RootQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Query_RootQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Query_RootQuestions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSearch_Guests_By_NameArgs = {
  args: Search_Guests_By_Name_Args;
  distinct_on?: InputMaybe<Array<Guests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Guests_Order_By>>;
  where?: InputMaybe<Guests_Bool_Exp>;
};


export type Query_RootSearch_Guests_By_Name_AggregateArgs = {
  args: Search_Guests_By_Name_Args;
  distinct_on?: InputMaybe<Array<Guests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Guests_Order_By>>;
  where?: InputMaybe<Guests_Bool_Exp>;
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** Holds the questionnaires for the events */
export type Questionnaire = {
  created_at: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  event: Events;
  event_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  prizes: Array<Prizes>;
  /** An aggregate relationship */
  prizes_aggregate: Prizes_Aggregate;
  /** An array relationship */
  questions: Array<Questions>;
  /** An aggregate relationship */
  questions_aggregate: Questions_Aggregate;
  status: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** Holds the questionnaires for the events */
export type QuestionnairePrizesArgs = {
  distinct_on?: InputMaybe<Array<Prizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prizes_Order_By>>;
  where?: InputMaybe<Prizes_Bool_Exp>;
};


/** Holds the questionnaires for the events */
export type QuestionnairePrizes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prizes_Order_By>>;
  where?: InputMaybe<Prizes_Bool_Exp>;
};


/** Holds the questionnaires for the events */
export type QuestionnaireQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


/** Holds the questionnaires for the events */
export type QuestionnaireQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};

/** aggregated selection of "questionnaire" */
export type Questionnaire_Aggregate = {
  aggregate?: Maybe<Questionnaire_Aggregate_Fields>;
  nodes: Array<Questionnaire>;
};

export type Questionnaire_Aggregate_Bool_Exp = {
  count?: InputMaybe<Questionnaire_Aggregate_Bool_Exp_Count>;
};

export type Questionnaire_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Questionnaire_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Questionnaire_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "questionnaire" */
export type Questionnaire_Aggregate_Fields = {
  avg?: Maybe<Questionnaire_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Questionnaire_Max_Fields>;
  min?: Maybe<Questionnaire_Min_Fields>;
  stddev?: Maybe<Questionnaire_Stddev_Fields>;
  stddev_pop?: Maybe<Questionnaire_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Questionnaire_Stddev_Samp_Fields>;
  sum?: Maybe<Questionnaire_Sum_Fields>;
  var_pop?: Maybe<Questionnaire_Var_Pop_Fields>;
  var_samp?: Maybe<Questionnaire_Var_Samp_Fields>;
  variance?: Maybe<Questionnaire_Variance_Fields>;
};


/** aggregate fields of "questionnaire" */
export type Questionnaire_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Questionnaire_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "questionnaire" */
export type Questionnaire_Aggregate_Order_By = {
  avg?: InputMaybe<Questionnaire_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Questionnaire_Max_Order_By>;
  min?: InputMaybe<Questionnaire_Min_Order_By>;
  stddev?: InputMaybe<Questionnaire_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Questionnaire_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Questionnaire_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Questionnaire_Sum_Order_By>;
  var_pop?: InputMaybe<Questionnaire_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Questionnaire_Var_Samp_Order_By>;
  variance?: InputMaybe<Questionnaire_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "questionnaire" */
export type Questionnaire_Arr_Rel_Insert_Input = {
  data: Array<Questionnaire_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Questionnaire_On_Conflict>;
};

/** aggregate avg on columns */
export type Questionnaire_Avg_Fields = {
  event_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "questionnaire" */
export type Questionnaire_Avg_Order_By = {
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "questionnaire". All fields are combined with a logical 'AND'. */
export type Questionnaire_Bool_Exp = {
  _and?: InputMaybe<Array<Questionnaire_Bool_Exp>>;
  _not?: InputMaybe<Questionnaire_Bool_Exp>;
  _or?: InputMaybe<Array<Questionnaire_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  event?: InputMaybe<Events_Bool_Exp>;
  event_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  prizes?: InputMaybe<Prizes_Bool_Exp>;
  prizes_aggregate?: InputMaybe<Prizes_Aggregate_Bool_Exp>;
  questions?: InputMaybe<Questions_Bool_Exp>;
  questions_aggregate?: InputMaybe<Questions_Aggregate_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "questionnaire" */
export type Questionnaire_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'questionnaire_pkey';

/** input type for incrementing numeric columns in table "questionnaire" */
export type Questionnaire_Inc_Input = {
  event_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "questionnaire" */
export type Questionnaire_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  event?: InputMaybe<Events_Obj_Rel_Insert_Input>;
  event_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  prizes?: InputMaybe<Prizes_Arr_Rel_Insert_Input>;
  questions?: InputMaybe<Questions_Arr_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Questionnaire_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  event_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "questionnaire" */
export type Questionnaire_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Questionnaire_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  event_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "questionnaire" */
export type Questionnaire_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "questionnaire" */
export type Questionnaire_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Questionnaire>;
};

/** input type for inserting object relation for remote table "questionnaire" */
export type Questionnaire_Obj_Rel_Insert_Input = {
  data: Questionnaire_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Questionnaire_On_Conflict>;
};

/** on_conflict condition type for table "questionnaire" */
export type Questionnaire_On_Conflict = {
  constraint: Questionnaire_Constraint;
  update_columns?: Array<Questionnaire_Update_Column>;
  where?: InputMaybe<Questionnaire_Bool_Exp>;
};

/** Ordering options when selecting data from "questionnaire". */
export type Questionnaire_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  event?: InputMaybe<Events_Order_By>;
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  prizes_aggregate?: InputMaybe<Prizes_Aggregate_Order_By>;
  questions_aggregate?: InputMaybe<Questions_Aggregate_Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: questionnaire */
export type Questionnaire_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** Holds the users and positions for each questionnaire */
export type Questionnaire_Ranking = {
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  last_answer?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  points: Scalars['Int']['output'];
};

export type Questionnaire_Ranking_Aggregate = {
  aggregate?: Maybe<Questionnaire_Ranking_Aggregate_Fields>;
  nodes: Array<Questionnaire_Ranking>;
};

/** aggregate fields of "questionnaire_ranking" */
export type Questionnaire_Ranking_Aggregate_Fields = {
  avg?: Maybe<Questionnaire_Ranking_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Questionnaire_Ranking_Max_Fields>;
  min?: Maybe<Questionnaire_Ranking_Min_Fields>;
  stddev?: Maybe<Questionnaire_Ranking_Stddev_Fields>;
  stddev_pop?: Maybe<Questionnaire_Ranking_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Questionnaire_Ranking_Stddev_Samp_Fields>;
  sum?: Maybe<Questionnaire_Ranking_Sum_Fields>;
  var_pop?: Maybe<Questionnaire_Ranking_Var_Pop_Fields>;
  var_samp?: Maybe<Questionnaire_Ranking_Var_Samp_Fields>;
  variance?: Maybe<Questionnaire_Ranking_Variance_Fields>;
};


/** aggregate fields of "questionnaire_ranking" */
export type Questionnaire_Ranking_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Questionnaire_Ranking_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Questionnaire_Ranking_Avg_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "questionnaire_ranking". All fields are combined with a logical 'AND'. */
export type Questionnaire_Ranking_Bool_Exp = {
  _and?: InputMaybe<Array<Questionnaire_Ranking_Bool_Exp>>;
  _not?: InputMaybe<Questionnaire_Ranking_Bool_Exp>;
  _or?: InputMaybe<Array<Questionnaire_Ranking_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  last_answer?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  points?: InputMaybe<Int_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "questionnaire_ranking" */
export type Questionnaire_Ranking_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "questionnaire_ranking" */
export type Questionnaire_Ranking_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  last_answer?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Questionnaire_Ranking_Max_Fields = {
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_answer?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Questionnaire_Ranking_Min_Fields = {
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_answer?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "questionnaire_ranking" */
export type Questionnaire_Ranking_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Questionnaire_Ranking>;
};

/** Ordering options when selecting data from "questionnaire_ranking". */
export type Questionnaire_Ranking_Order_By = {
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_answer?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
};

/** select columns of table "questionnaire_ranking" */
export type Questionnaire_Ranking_Select_Column =
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'last_answer'
  /** column name */
  | 'name'
  /** column name */
  | 'phone'
  /** column name */
  | 'points';

/** input type for updating data in table "questionnaire_ranking" */
export type Questionnaire_Ranking_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  last_answer?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Questionnaire_Ranking_Stddev_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Questionnaire_Ranking_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Questionnaire_Ranking_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "questionnaire_ranking" */
export type Questionnaire_Ranking_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Questionnaire_Ranking_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Questionnaire_Ranking_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  last_answer?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Questionnaire_Ranking_Sum_Fields = {
  id?: Maybe<Scalars['Int']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
};

export type Questionnaire_Ranking_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Questionnaire_Ranking_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Questionnaire_Ranking_Set_Input>;
  /** filter the rows which have to be updated */
  where: Questionnaire_Ranking_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Questionnaire_Ranking_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Questionnaire_Ranking_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Questionnaire_Ranking_Variance_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

/** select columns of table "questionnaire" */
export type Questionnaire_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'description'
  /** column name */
  | 'event_id'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'status'
  /** column name */
  | 'title'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "questionnaire" */
export type Questionnaire_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  event_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Questionnaire_Stddev_Fields = {
  event_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "questionnaire" */
export type Questionnaire_Stddev_Order_By = {
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Questionnaire_Stddev_Pop_Fields = {
  event_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "questionnaire" */
export type Questionnaire_Stddev_Pop_Order_By = {
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Questionnaire_Stddev_Samp_Fields = {
  event_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "questionnaire" */
export type Questionnaire_Stddev_Samp_Order_By = {
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "questionnaire" */
export type Questionnaire_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Questionnaire_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Questionnaire_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  event_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Questionnaire_Sum_Fields = {
  event_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "questionnaire" */
export type Questionnaire_Sum_Order_By = {
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "questionnaire" */
export type Questionnaire_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'description'
  /** column name */
  | 'event_id'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'status'
  /** column name */
  | 'title'
  /** column name */
  | 'updated_at';

export type Questionnaire_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Questionnaire_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Questionnaire_Set_Input>;
  /** filter the rows which have to be updated */
  where: Questionnaire_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Questionnaire_Var_Pop_Fields = {
  event_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "questionnaire" */
export type Questionnaire_Var_Pop_Order_By = {
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Questionnaire_Var_Samp_Fields = {
  event_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "questionnaire" */
export type Questionnaire_Var_Samp_Order_By = {
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Questionnaire_Variance_Fields = {
  event_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "questionnaire" */
export type Questionnaire_Variance_Order_By = {
  event_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Holds all questions that can be answered by the wedding guests */
export type Questions = {
  /** An array relationship */
  answers: Array<Answers>;
  /** An aggregate relationship */
  answers_aggregate: Answers_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  hint?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  options: Array<Options>;
  /** An aggregate relationship */
  options_aggregate: Options_Aggregate;
  /** An object relationship */
  questionnaire?: Maybe<Questionnaire>;
  questionnaire_id?: Maybe<Scalars['Int']['output']>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  weight: Scalars['Int']['output'];
};


/** Holds all questions that can be answered by the wedding guests */
export type QuestionsAnswersArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


/** Holds all questions that can be answered by the wedding guests */
export type QuestionsAnswers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


/** Holds all questions that can be answered by the wedding guests */
export type QuestionsOptionsArgs = {
  distinct_on?: InputMaybe<Array<Options_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Options_Order_By>>;
  where?: InputMaybe<Options_Bool_Exp>;
};


/** Holds all questions that can be answered by the wedding guests */
export type QuestionsOptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Options_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Options_Order_By>>;
  where?: InputMaybe<Options_Bool_Exp>;
};

/** aggregated selection of "questions" */
export type Questions_Aggregate = {
  aggregate?: Maybe<Questions_Aggregate_Fields>;
  nodes: Array<Questions>;
};

export type Questions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Questions_Aggregate_Bool_Exp_Count>;
};

export type Questions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Questions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Questions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "questions" */
export type Questions_Aggregate_Fields = {
  avg?: Maybe<Questions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Questions_Max_Fields>;
  min?: Maybe<Questions_Min_Fields>;
  stddev?: Maybe<Questions_Stddev_Fields>;
  stddev_pop?: Maybe<Questions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Questions_Stddev_Samp_Fields>;
  sum?: Maybe<Questions_Sum_Fields>;
  var_pop?: Maybe<Questions_Var_Pop_Fields>;
  var_samp?: Maybe<Questions_Var_Samp_Fields>;
  variance?: Maybe<Questions_Variance_Fields>;
};


/** aggregate fields of "questions" */
export type Questions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Questions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "questions" */
export type Questions_Aggregate_Order_By = {
  avg?: InputMaybe<Questions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Questions_Max_Order_By>;
  min?: InputMaybe<Questions_Min_Order_By>;
  stddev?: InputMaybe<Questions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Questions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Questions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Questions_Sum_Order_By>;
  var_pop?: InputMaybe<Questions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Questions_Var_Samp_Order_By>;
  variance?: InputMaybe<Questions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "questions" */
export type Questions_Arr_Rel_Insert_Input = {
  data: Array<Questions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};

/** aggregate avg on columns */
export type Questions_Avg_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  questionnaire_id?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "questions" */
export type Questions_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "questions". All fields are combined with a logical 'AND'. */
export type Questions_Bool_Exp = {
  _and?: InputMaybe<Array<Questions_Bool_Exp>>;
  _not?: InputMaybe<Questions_Bool_Exp>;
  _or?: InputMaybe<Array<Questions_Bool_Exp>>;
  answers?: InputMaybe<Answers_Bool_Exp>;
  answers_aggregate?: InputMaybe<Answers_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  hint?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  options?: InputMaybe<Options_Bool_Exp>;
  options_aggregate?: InputMaybe<Options_Aggregate_Bool_Exp>;
  questionnaire?: InputMaybe<Questionnaire_Bool_Exp>;
  questionnaire_id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  weight?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "questions" */
export type Questions_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'questions_pkey';

/** input type for incrementing numeric columns in table "questions" */
export type Questions_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  questionnaire_id?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "questions" */
export type Questions_Insert_Input = {
  answers?: InputMaybe<Answers_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  hint?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Options_Arr_Rel_Insert_Input>;
  questionnaire?: InputMaybe<Questionnaire_Obj_Rel_Insert_Input>;
  questionnaire_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Questions_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  hint?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  questionnaire_id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "questions" */
export type Questions_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Questions_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  hint?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  questionnaire_id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "questions" */
export type Questions_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "questions" */
export type Questions_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Questions>;
};

/** input type for inserting object relation for remote table "questions" */
export type Questions_Obj_Rel_Insert_Input = {
  data: Questions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};

/** on_conflict condition type for table "questions" */
export type Questions_On_Conflict = {
  constraint: Questions_Constraint;
  update_columns?: Array<Questions_Update_Column>;
  where?: InputMaybe<Questions_Bool_Exp>;
};

/** Ordering options when selecting data from "questions". */
export type Questions_Order_By = {
  answers_aggregate?: InputMaybe<Answers_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  hint?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  options_aggregate?: InputMaybe<Options_Aggregate_Order_By>;
  questionnaire?: InputMaybe<Questionnaire_Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: questions */
export type Questions_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "questions" */
export type Questions_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'hint'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'questionnaire_id'
  /** column name */
  | 'status'
  /** column name */
  | 'title'
  /** column name */
  | 'type'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'weight';

/** input type for updating data in table "questions" */
export type Questions_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  hint?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  questionnaire_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Questions_Stddev_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  questionnaire_id?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "questions" */
export type Questions_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Questions_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  questionnaire_id?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "questions" */
export type Questions_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Questions_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  questionnaire_id?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "questions" */
export type Questions_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "questions" */
export type Questions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Questions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Questions_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  hint?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  questionnaire_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Questions_Sum_Fields = {
  id?: Maybe<Scalars['Int']['output']>;
  questionnaire_id?: Maybe<Scalars['Int']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "questions" */
export type Questions_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** update columns of table "questions" */
export type Questions_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'hint'
  /** column name */
  | 'id'
  /** column name */
  | 'image'
  /** column name */
  | 'questionnaire_id'
  /** column name */
  | 'status'
  /** column name */
  | 'title'
  /** column name */
  | 'type'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'weight';

export type Questions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Questions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Questions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Questions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Questions_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  questionnaire_id?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "questions" */
export type Questions_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Questions_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  questionnaire_id?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "questions" */
export type Questions_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Questions_Variance_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
  questionnaire_id?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "questions" */
export type Questions_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  questionnaire_id?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

export type Search_Guests_By_Name_Args = {
  event_id?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription_Root = {
  /** An array relationship */
  answers: Array<Answers>;
  /** An aggregate relationship */
  answers_aggregate: Answers_Aggregate;
  /** fetch data from the table: "answers" using primary key columns */
  answers_by_pk?: Maybe<Answers>;
  /** fetch data from the table in a streaming manner: "answers" */
  answers_stream: Array<Answers>;
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch aggregated fields from the table: "events" */
  events_aggregate: Events_Aggregate;
  /** fetch data from the table: "events" using primary key columns */
  events_by_pk?: Maybe<Events>;
  /** An array relationship */
  events_owners: Array<Events_Owners>;
  /** An aggregate relationship */
  events_owners_aggregate: Events_Owners_Aggregate;
  /** fetch data from the table: "events_owners" using primary key columns */
  events_owners_by_pk?: Maybe<Events_Owners>;
  /** fetch data from the table in a streaming manner: "events_owners" */
  events_owners_stream: Array<Events_Owners>;
  /** fetch data from the table in a streaming manner: "events" */
  events_stream: Array<Events>;
  /** execute function "get_questionnaire_ranking" which returns "questionnaire_ranking" */
  get_questionnaire_ranking: Array<Questionnaire_Ranking>;
  /** execute function "get_questionnaire_ranking" and query aggregates on result of table type "questionnaire_ranking" */
  get_questionnaire_ranking_aggregate: Questionnaire_Ranking_Aggregate;
  /** An array relationship */
  guests: Array<Guests>;
  /** An aggregate relationship */
  guests_aggregate: Guests_Aggregate;
  /** fetch data from the table: "guests" using primary key columns */
  guests_by_pk?: Maybe<Guests>;
  /** fetch data from the table in a streaming manner: "guests" */
  guests_stream: Array<Guests>;
  /** fetch data from the table: "log" */
  log: Array<Log>;
  /** fetch aggregated fields from the table: "log" */
  log_aggregate: Log_Aggregate;
  /** fetch data from the table: "log" using primary key columns */
  log_by_pk?: Maybe<Log>;
  /** fetch data from the table in a streaming manner: "log" */
  log_stream: Array<Log>;
  /** An array relationship */
  options: Array<Options>;
  /** An aggregate relationship */
  options_aggregate: Options_Aggregate;
  /** fetch data from the table: "options" using primary key columns */
  options_by_pk?: Maybe<Options>;
  /** fetch data from the table in a streaming manner: "options" */
  options_stream: Array<Options>;
  /** An array relationship */
  prizes: Array<Prizes>;
  /** An aggregate relationship */
  prizes_aggregate: Prizes_Aggregate;
  /** fetch data from the table: "prizes" using primary key columns */
  prizes_by_pk?: Maybe<Prizes>;
  /** fetch data from the table in a streaming manner: "prizes" */
  prizes_stream: Array<Prizes>;
  /** fetch data from the table: "questionnaire" */
  questionnaire: Array<Questionnaire>;
  /** fetch aggregated fields from the table: "questionnaire" */
  questionnaire_aggregate: Questionnaire_Aggregate;
  /** fetch data from the table: "questionnaire" using primary key columns */
  questionnaire_by_pk?: Maybe<Questionnaire>;
  /** fetch data from the table: "questionnaire_ranking" */
  questionnaire_ranking: Array<Questionnaire_Ranking>;
  /** fetch aggregated fields from the table: "questionnaire_ranking" */
  questionnaire_ranking_aggregate: Questionnaire_Ranking_Aggregate;
  /** fetch data from the table in a streaming manner: "questionnaire_ranking" */
  questionnaire_ranking_stream: Array<Questionnaire_Ranking>;
  /** fetch data from the table in a streaming manner: "questionnaire" */
  questionnaire_stream: Array<Questionnaire>;
  /** An array relationship */
  questions: Array<Questions>;
  /** An aggregate relationship */
  questions_aggregate: Questions_Aggregate;
  /** fetch data from the table: "questions" using primary key columns */
  questions_by_pk?: Maybe<Questions>;
  /** fetch data from the table in a streaming manner: "questions" */
  questions_stream: Array<Questions>;
  /** execute function "search_guests_by_name" which returns "guests" */
  search_guests_by_name: Array<Guests>;
  /** execute function "search_guests_by_name" and query aggregates on result of table type "guests" */
  search_guests_by_name_aggregate: Guests_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootAnswersArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Subscription_RootAnswers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Subscription_RootAnswers_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootAnswers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Answers_Stream_Cursor_Input>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


export type Subscription_RootEventsArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Subscription_RootEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Order_By>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Subscription_RootEvents_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootEvents_OwnersArgs = {
  distinct_on?: InputMaybe<Array<Events_Owners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Owners_Order_By>>;
  where?: InputMaybe<Events_Owners_Bool_Exp>;
};


export type Subscription_RootEvents_Owners_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Owners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Owners_Order_By>>;
  where?: InputMaybe<Events_Owners_Bool_Exp>;
};


export type Subscription_RootEvents_Owners_By_PkArgs = {
  event_id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};


export type Subscription_RootEvents_Owners_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Events_Owners_Stream_Cursor_Input>>;
  where?: InputMaybe<Events_Owners_Bool_Exp>;
};


export type Subscription_RootEvents_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Events_Stream_Cursor_Input>>;
  where?: InputMaybe<Events_Bool_Exp>;
};


export type Subscription_RootGet_Questionnaire_RankingArgs = {
  args: Get_Questionnaire_Ranking_Args;
  distinct_on?: InputMaybe<Array<Questionnaire_Ranking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questionnaire_Ranking_Order_By>>;
  where?: InputMaybe<Questionnaire_Ranking_Bool_Exp>;
};


export type Subscription_RootGet_Questionnaire_Ranking_AggregateArgs = {
  args: Get_Questionnaire_Ranking_Args;
  distinct_on?: InputMaybe<Array<Questionnaire_Ranking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questionnaire_Ranking_Order_By>>;
  where?: InputMaybe<Questionnaire_Ranking_Bool_Exp>;
};


export type Subscription_RootGuestsArgs = {
  distinct_on?: InputMaybe<Array<Guests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Guests_Order_By>>;
  where?: InputMaybe<Guests_Bool_Exp>;
};


export type Subscription_RootGuests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Guests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Guests_Order_By>>;
  where?: InputMaybe<Guests_Bool_Exp>;
};


export type Subscription_RootGuests_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootGuests_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Guests_Stream_Cursor_Input>>;
  where?: InputMaybe<Guests_Bool_Exp>;
};


export type Subscription_RootLogArgs = {
  distinct_on?: InputMaybe<Array<Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Log_Order_By>>;
  where?: InputMaybe<Log_Bool_Exp>;
};


export type Subscription_RootLog_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Log_Order_By>>;
  where?: InputMaybe<Log_Bool_Exp>;
};


export type Subscription_RootLog_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootLog_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Log_Stream_Cursor_Input>>;
  where?: InputMaybe<Log_Bool_Exp>;
};


export type Subscription_RootOptionsArgs = {
  distinct_on?: InputMaybe<Array<Options_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Options_Order_By>>;
  where?: InputMaybe<Options_Bool_Exp>;
};


export type Subscription_RootOptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Options_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Options_Order_By>>;
  where?: InputMaybe<Options_Bool_Exp>;
};


export type Subscription_RootOptions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOptions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Options_Stream_Cursor_Input>>;
  where?: InputMaybe<Options_Bool_Exp>;
};


export type Subscription_RootPrizesArgs = {
  distinct_on?: InputMaybe<Array<Prizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prizes_Order_By>>;
  where?: InputMaybe<Prizes_Bool_Exp>;
};


export type Subscription_RootPrizes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prizes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prizes_Order_By>>;
  where?: InputMaybe<Prizes_Bool_Exp>;
};


export type Subscription_RootPrizes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPrizes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Prizes_Stream_Cursor_Input>>;
  where?: InputMaybe<Prizes_Bool_Exp>;
};


export type Subscription_RootQuestionnaireArgs = {
  distinct_on?: InputMaybe<Array<Questionnaire_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questionnaire_Order_By>>;
  where?: InputMaybe<Questionnaire_Bool_Exp>;
};


export type Subscription_RootQuestionnaire_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questionnaire_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questionnaire_Order_By>>;
  where?: InputMaybe<Questionnaire_Bool_Exp>;
};


export type Subscription_RootQuestionnaire_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootQuestionnaire_RankingArgs = {
  distinct_on?: InputMaybe<Array<Questionnaire_Ranking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questionnaire_Ranking_Order_By>>;
  where?: InputMaybe<Questionnaire_Ranking_Bool_Exp>;
};


export type Subscription_RootQuestionnaire_Ranking_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questionnaire_Ranking_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questionnaire_Ranking_Order_By>>;
  where?: InputMaybe<Questionnaire_Ranking_Bool_Exp>;
};


export type Subscription_RootQuestionnaire_Ranking_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Questionnaire_Ranking_Stream_Cursor_Input>>;
  where?: InputMaybe<Questionnaire_Ranking_Bool_Exp>;
};


export type Subscription_RootQuestionnaire_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Questionnaire_Stream_Cursor_Input>>;
  where?: InputMaybe<Questionnaire_Bool_Exp>;
};


export type Subscription_RootQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Subscription_RootQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Subscription_RootQuestions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootQuestions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Questions_Stream_Cursor_Input>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Subscription_RootSearch_Guests_By_NameArgs = {
  args: Search_Guests_By_Name_Args;
  distinct_on?: InputMaybe<Array<Guests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Guests_Order_By>>;
  where?: InputMaybe<Guests_Bool_Exp>;
};


export type Subscription_RootSearch_Guests_By_Name_AggregateArgs = {
  args: Search_Guests_By_Name_Args;
  distinct_on?: InputMaybe<Array<Guests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Guests_Order_By>>;
  where?: InputMaybe<Guests_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Holds guests names, emails and phones */
export type Users = {
  /** An array relationship */
  answers: Array<Answers>;
  /** An aggregate relationship */
  answers_aggregate: Answers_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  events_owners: Array<Events_Owners>;
  /** An aggregate relationship */
  events_owners_aggregate: Events_Owners_Aggregate;
  /** An array relationship */
  guests: Array<Guests>;
  /** An aggregate relationship */
  guests_aggregate: Guests_Aggregate;
  id: Scalars['Int']['output'];
  issuer?: Maybe<Scalars['String']['output']>;
  logged_at?: Maybe<Scalars['timestamptz']['output']>;
  name: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** Holds guests names, emails and phones */
export type UsersAnswersArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


/** Holds guests names, emails and phones */
export type UsersAnswers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Answers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Answers_Order_By>>;
  where?: InputMaybe<Answers_Bool_Exp>;
};


/** Holds guests names, emails and phones */
export type UsersEvents_OwnersArgs = {
  distinct_on?: InputMaybe<Array<Events_Owners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Owners_Order_By>>;
  where?: InputMaybe<Events_Owners_Bool_Exp>;
};


/** Holds guests names, emails and phones */
export type UsersEvents_Owners_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Events_Owners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Events_Owners_Order_By>>;
  where?: InputMaybe<Events_Owners_Bool_Exp>;
};


/** Holds guests names, emails and phones */
export type UsersGuestsArgs = {
  distinct_on?: InputMaybe<Array<Guests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Guests_Order_By>>;
  where?: InputMaybe<Guests_Bool_Exp>;
};


/** Holds guests names, emails and phones */
export type UsersGuests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Guests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Guests_Order_By>>;
  where?: InputMaybe<Guests_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  answers?: InputMaybe<Answers_Bool_Exp>;
  answers_aggregate?: InputMaybe<Answers_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  events_owners?: InputMaybe<Events_Owners_Bool_Exp>;
  events_owners_aggregate?: InputMaybe<Events_Owners_Aggregate_Bool_Exp>;
  guests?: InputMaybe<Guests_Bool_Exp>;
  guests_aggregate?: InputMaybe<Guests_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  issuer?: InputMaybe<String_Comparison_Exp>;
  logged_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export type Users_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'guests_pkey';

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  answers?: InputMaybe<Answers_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  events_owners?: InputMaybe<Events_Owners_Arr_Rel_Insert_Input>;
  guests?: InputMaybe<Guests_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  issuer?: InputMaybe<Scalars['String']['input']>;
  logged_at?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  issuer?: Maybe<Scalars['String']['output']>;
  logged_at?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  issuer?: Maybe<Scalars['String']['output']>;
  logged_at?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  answers_aggregate?: InputMaybe<Answers_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  events_owners_aggregate?: InputMaybe<Events_Owners_Aggregate_Order_By>;
  guests_aggregate?: InputMaybe<Guests_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  issuer?: InputMaybe<Order_By>;
  logged_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "users" */
export type Users_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'issuer'
  /** column name */
  | 'logged_at'
  /** column name */
  | 'name'
  /** column name */
  | 'password'
  /** column name */
  | 'phone'
  /** column name */
  | 'role'
  /** column name */
  | 'status'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  issuer?: InputMaybe<Scalars['String']['input']>;
  logged_at?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  issuer?: InputMaybe<Scalars['String']['input']>;
  logged_at?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "users" */
export type Users_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'issuer'
  /** column name */
  | 'logged_at'
  /** column name */
  | 'name'
  /** column name */
  | 'password'
  /** column name */
  | 'phone'
  /** column name */
  | 'role'
  /** column name */
  | 'status'
  /** column name */
  | 'updated_at';

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type GetGuestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGuestsQuery = { guests: Array<{ id: number, name?: string | null, email?: string | null, phone?: string | null, created_at?: any | null, updated_at?: any | null }> };

export type GetEventQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetEventQuery = { events_by_pk?: { id: number, name: string, datetime?: any | null, location?: string | null, type: string, image?: string | null, questionnaires: Array<{ id: number, title?: string | null, description?: string | null, image?: string | null, event_id: number, questions: Array<{ id: number, title: string, type: string, hint?: string | null, image?: string | null, options: Array<{ id: number, title: string }> }> }> } | null };

export type SearchEventGuestsByNameQueryVariables = Exact<{
  args: Search_Guests_By_Name_Args;
}>;


export type SearchEventGuestsByNameQuery = { search_guests_by_name: Array<{ id: number, name?: string | null, email?: string | null, phone?: string | null, created_at?: any | null, updated_at?: any | null }> };

export type GetEventQuestionnairesGuestAnswersQueryVariables = Exact<{
  eventId?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
}>;


export type GetEventQuestionnairesGuestAnswersQuery = { questionnaire: Array<{ id: number, title?: string | null, description?: string | null, image?: string | null, event_id: number, event: { name: string }, questions: Array<{ id: number, title: string, type: string, hint?: string | null, image?: string | null, options: Array<{ id: number, title: string }>, answers: Array<{ user_id: number, option_id?: number | null }>, answers_aggregate: { aggregate?: { count: number } | null } }>, prizes: Array<{ name: string, image?: string | null, ranking: number }> }> };

export type GetEventQuestionnaireUserAnswersByIdQueryVariables = Exact<{
  questionnaireId?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
}>;


export type GetEventQuestionnaireUserAnswersByIdQuery = { questionnaire: Array<{ id: number, title?: string | null, description?: string | null, image?: string | null, event_id: number, event: { name: string }, questions: Array<{ id: number, title: string, type: string, hint?: string | null, image?: string | null, options: Array<{ id: number, title: string }>, answers: Array<{ id: number, user_id: number, option_id?: number | null, updated_at: any, question_id: number }> }>, prizes: Array<{ name: string, image?: string | null, ranking: number }> }> };

export type GetEventQuestionnaireGuestAnswersCountQueryVariables = Exact<{
  eventId: Scalars['Int']['input'];
  questionnaireId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
}>;


export type GetEventQuestionnaireGuestAnswersCountQuery = { answers_aggregate: { aggregate?: { count: number } | null } };

export type GetEventsByUserQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type GetEventsByUserQuery = { events: Array<{ id: number, name: string, datetime?: any | null, location?: string | null, type: string, image?: string | null, guests: Array<{ id: number }>, questionnaires: Array<{ id: number, title?: string | null, description?: string | null, image?: string | null, event_id: number, questions: Array<{ id: number, title: string, type: string, hint?: string | null, image?: string | null, options: Array<{ id: number, title: string }>, answers: Array<{ user_id: number, option_id?: number | null }> }> }> }> };

export type GetQuestionnaireRankingQueryVariables = Exact<{
  args: Get_Questionnaire_Ranking_Args;
}>;


export type GetQuestionnaireRankingQuery = { get_questionnaire_ranking: Array<{ id: number, name?: string | null, email?: string | null, phone?: string | null, points: number, last_answer?: any | null }> };

export type InsertAnswerMutationVariables = Exact<{
  questionId: Scalars['Int']['input'];
  optionId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
}>;


export type InsertAnswerMutation = { insert_answers_one?: { question_id: number, option_id?: number | null, user_id: number } | null };

export type UpdateAnswerMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  optionId: Scalars['Int']['input'];
}>;


export type UpdateAnswerMutation = { update_answers_by_pk?: { question_id: number, option_id?: number | null, user_id: number } | null };

export type GetGuestsByEventsQueryVariables = Exact<{
  eventId: Scalars['Int']['input'];
}>;


export type GetGuestsByEventsQuery = { guests: Array<{ id: number, name?: string | null, status?: string | null, email?: string | null, phone?: string | null, user?: { id: number, email?: string | null, name: string } | null }> };

export type GetGuestByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetGuestByIdQuery = { guests: Array<{ id: number, name?: string | null, status?: string | null, email?: string | null, phone?: string | null, user?: { id: number, email?: string | null, name: string } | null }> };

export type InsertGuestMutationVariables = Exact<{
  eventId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
}>;


export type InsertGuestMutation = { insert_guests_one?: { id: number, name?: string | null, email?: string | null, phone?: string | null } | null };

export type UpdateGuestMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateGuestMutation = { update_guests_by_pk?: { id: number, name?: string | null, email?: string | null, phone?: string | null } | null };

export type DeleteGuestMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteGuestMutation = { delete_guests_by_pk?: { id: number } | null };

export type GetEventQuestionnaireUsersAnswersQueryVariables = Exact<{
  questionnaireId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetEventQuestionnaireUsersAnswersQuery = { questionnaire: Array<{ id: number, title?: string | null, description?: string | null, image?: string | null, event_id: number, event: { name: string }, questions: Array<{ id: number, title: string, type: string, hint?: string | null, image?: string | null, answers: Array<{ id: number, user_id: number, option_id?: number | null, updated_at: any, question_id: number, user: { id: number, name: string } }>, options: Array<{ id: number, title: string, answers: Array<{ id: number, user_id: number, option_id?: number | null, updated_at: any, question_id: number, user: { id: number, name: string } }> }> }>, prizes: Array<{ name: string, image?: string | null, ranking: number }> }> };


export const GetGuestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGuests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<GetGuestsQuery, GetGuestsQueryVariables>;
export const GetEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"datetime"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"questionnaires"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"event_id"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hint"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEventQuery, GetEventQueryVariables>;
export const SearchEventGuestsByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchEventGuestsByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"args"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"search_guests_by_name_args"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search_guests_by_name"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"Variable","name":{"kind":"Name","value":"args"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<SearchEventGuestsByNameQuery, SearchEventGuestsByNameQueryVariables>;
export const GetEventQuestionnairesGuestAnswersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEventQuestionnairesGuestAnswers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionnaire"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"event_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"event_id"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hint"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"answers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"option_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"answers_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"question"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"questionnaire"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"event_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"prizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"ranking"}}]}}]}}]}}]} as unknown as DocumentNode<GetEventQuestionnairesGuestAnswersQuery, GetEventQuestionnairesGuestAnswersQueryVariables>;
export const GetEventQuestionnaireUserAnswersByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEventQuestionnaireUserAnswersById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionnaireId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionnaire"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionnaireId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"event_id"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hint"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"answers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"option_id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"prizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"ranking"}}]}}]}}]}}]} as unknown as DocumentNode<GetEventQuestionnaireUserAnswersByIdQuery, GetEventQuestionnaireUserAnswersByIdQueryVariables>;
export const GetEventQuestionnaireGuestAnswersCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEventQuestionnaireGuestAnswersCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionnaireId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answers_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"question"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"questionnaire_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionnaireId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"questionnaire"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"event_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<GetEventQuestionnaireGuestAnswersCountQuery, GetEventQuestionnaireGuestAnswersCountQueryVariables>;
export const GetEventsByUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEventsByUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"guests"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"datetime"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"guests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"questionnaires"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"event_id"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hint"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"answers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"option_id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEventsByUserQuery, GetEventsByUserQueryVariables>;
export const GetQuestionnaireRankingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetQuestionnaireRanking"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"args"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"get_questionnaire_ranking_args"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"get_questionnaire_ranking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"args"},"value":{"kind":"Variable","name":{"kind":"Name","value":"args"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"last_answer"}}]}}]}}]} as unknown as DocumentNode<GetQuestionnaireRankingQuery, GetQuestionnaireRankingQueryVariables>;
export const InsertAnswerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertAnswer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"optionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_answers_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"question_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"option_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"optionId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"option_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}}]} as unknown as DocumentNode<InsertAnswerMutation, InsertAnswerMutationVariables>;
export const UpdateAnswerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAnswer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"optionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_answers_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"option_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"optionId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question_id"}},{"kind":"Field","name":{"kind":"Name","value":"option_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}}]}}]}}]} as unknown as DocumentNode<UpdateAnswerMutation, UpdateAnswerMutationVariables>;
export const GetGuestsByEventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGuestsByEvents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"event_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetGuestsByEventsQuery, GetGuestsByEventsQueryVariables>;
export const GetGuestByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGuestById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetGuestByIdQuery, GetGuestByIdQueryVariables>;
export const InsertGuestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertGuest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_guests_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"event_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}}]} as unknown as DocumentNode<InsertGuestMutation, InsertGuestMutationVariables>;
export const UpdateGuestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateGuest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_guests_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}}]} as unknown as DocumentNode<UpdateGuestMutation, UpdateGuestMutationVariables>;
export const DeleteGuestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteGuest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_guests_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteGuestMutation, DeleteGuestMutationVariables>;
export const GetEventQuestionnaireUsersAnswersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEventQuestionnaireUsersAnswers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionnaireId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionnaire"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionnaireId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"event_id"}},{"kind":"Field","name":{"kind":"Name","value":"event"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hint"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"answers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"option_id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"answers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"option_id"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"question_id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"prizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"ranking"}}]}}]}}]}}]} as unknown as DocumentNode<GetEventQuestionnaireUsersAnswersQuery, GetEventQuestionnaireUsersAnswersQueryVariables>;